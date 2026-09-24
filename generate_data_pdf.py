import os

class PortfolioPDF:
    def __init__(self, filename):
        self.filename = filename
        self.pages = []
        self.current_stream = []
        self.width = 612   # 8.5 x 72 pt
        self.height = 792  # 11 x 72 pt
        self.margin_x = 42
        self.margin_top = 36
        self.margin_bottom = 36
        self.content_width = self.width - 2 * self.margin_x
        self.y = self.height - self.margin_top
        self.page_num = 0

    def new_page(self):
        if self.page_num > 0:
            self._draw_footer()
            self.pages.append("".join(self.current_stream))
            self.current_stream = []
        self.page_num += 1
        self.y = self.height - self.margin_top
        # Top gradient-like accent bar
        self.rect(0, self.height - 4, self.width, 4, fill_color=(0.01, 0.55, 0.88))
        self.rect(0, self.height - 6, self.width, 2, fill_color=(0.58, 0.33, 0.95))

    def _draw_footer(self):
        # Footer rule & page info
        self.line(self.margin_x, 28, self.width - self.margin_x, 28, color=(0.85, 0.88, 0.92), width=0.8)
        self.text(self.margin_x, 16, "Deepak Prasad Shah  |  Portfolio Data Export  |  deepakprasadshah.com.np", font="F1", size=8, color=(0.5, 0.55, 0.6))
        self.text(self.width - self.margin_x - 45, 16, f"Page {self.page_num} of 2", font="F1", size=8, color=(0.5, 0.55, 0.6))

    def check_space(self, needed_pt):
        if self.y - needed_pt < self.margin_bottom:
            self.new_page()

    def text(self, x, y, string, font="F1", size=10, color=(0.1, 0.1, 0.1)):
        r, g, b = color
        clean_str = string.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")
        self.current_stream.append(
            f"BT /{font} {size} Tf {r:.3f} {g:.3f} {b:.3f} rg {x:.2f} {y:.2f} Td ({clean_str}) Tj ET\n"
        )

    def rect(self, x, y, w, h, fill_color=None, stroke_color=None, stroke_width=1):
        ops = []
        if fill_color:
            r, g, b = fill_color
            ops.append(f"{r:.3f} {g:.3f} {b:.3f} rg")
        if stroke_color:
            r, g, b = stroke_color
            ops.append(f"{r:.3f} {g:.3f} {b:.3f} RG {stroke_width} w")
        ops.append(f"{x:.2f} {y:.2f} {w:.2f} {h:.2f} re")
        if fill_color and stroke_color:
            ops.append("B")
        elif fill_color:
            ops.append("f")
        else:
            ops.append("S")
        self.current_stream.append(" ".join(ops) + "\n")

    def line(self, x1, y1, x2, y2, color=(0.7, 0.7, 0.7), width=1):
        r, g, b = color
        self.current_stream.append(
            f"{r:.3f} {g:.3f} {b:.3f} RG {width} w {x1:.2f} {y1:.2f} m {x2:.2f} {y2:.2f} l S\n"
        )

    def section_header(self, title, subtitle=None):
        self.check_space(34)
        self.y -= 10
        self.rect(self.margin_x, self.y - 2, 4, 13, fill_color=(0.01, 0.55, 0.88))
        self.text(self.margin_x + 9, self.y, title.upper(), font="F2", size=10, color=(0.08, 0.12, 0.22))
        self.y -= 4
        self.line(self.margin_x, self.y, self.width - self.margin_x, self.y, color=(0.88, 0.91, 0.94), width=0.8)
        self.y -= 9
        if subtitle:
            self.text(self.margin_x, self.y, subtitle, font="F3", size=8, color=(0.4, 0.45, 0.5))
            self.y -= 8

    def draw_wrapped_text(self, text, x, font="F1", size=8.5, color=(0.25, 0.28, 0.35), line_height=11.5, max_chars=96):
        words = text.split(" ")
        current_line = []
        for word in words:
            test_line = " ".join(current_line + [word])
            if len(test_line) > max_chars:
                self.check_space(line_height)
                self.text(x, self.y, " ".join(current_line), font=font, size=size, color=color)
                self.y -= line_height
                current_line = [word]
            else:
                current_line.append(word)
        if current_line:
            self.check_space(line_height)
            self.text(x, self.y, " ".join(current_line), font=font, size=size, color=color)
            self.y -= line_height

    def bullet(self, text, indent=10):
        self.check_space(12)
        bullet_char = "-"
        self.text(self.margin_x + indent, self.y, bullet_char, font="F2", size=9, color=(0.01, 0.55, 0.88))
        self.draw_wrapped_text(text, self.margin_x + indent + 8, font="F1", size=8.3, color=(0.25, 0.28, 0.35), line_height=11, max_chars=94)
        self.y -= 1.5

    def save(self):
        if self.current_stream:
            self._draw_footer()
            self.pages.append("".join(self.current_stream))
        
        objects = []
        num_pages = len(self.pages)
        page_obj_ids = [3 + i for i in range(num_pages)]
        font_obj_start = 3 + num_pages
        font1_id = font_obj_start
        font2_id = font_obj_start + 1
        font3_id = font_obj_start + 2
        content_start_id = font_obj_start + 3

        objects.append("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n")
        kids_str = " ".join([f"{pid} 0 R" for pid in page_obj_ids])
        objects.append(f"2 0 obj\n<< /Type /Pages /Kids [{kids_str}] /Count {num_pages} >>\nendobj\n")
        
        for i, pid in enumerate(page_obj_ids):
            cid = content_start_id + i
            page_dict = f"""{pid} 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 {self.width} {self.height}]
  /Resources <<
    /Font <<
      /F1 {font1_id} 0 R
      /F2 {font2_id} 0 R
      /F3 {font3_id} 0 R
    >>
  >>
  /Contents {cid} 0 R
>>
endobj
"""
            objects.append(page_dict)

        objects.append(f"{font1_id} 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>\nendobj\n")
        objects.append(f"{font2_id} 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>\nendobj\n")
        objects.append(f"{font3_id} 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>\nendobj\n")

        for i, stream_content in enumerate(self.pages):
            cid = content_start_id + i
            stream_bytes = stream_content.encode("latin-1", "replace")
            content_obj = f"{cid} 0 obj\n<< /Length {len(stream_bytes)} >>\nstream\n{stream_content}\nendstream\nendobj\n"
            objects.append(content_obj)

        header = "%PDF-1.4\n%\xe2\xe3\xcf\xd3\n"
        with open(self.filename, "wb") as f:
            f.write(header.encode("latin-1"))
            xref = [0]
            pos = len(header.encode("latin-1"))
            for obj in objects:
                xref.append(pos)
                b = obj.encode("latin-1", "replace")
                f.write(b)
                pos += len(b)
            
            xref_start = pos
            f.write(f"xref\n0 {len(xref)}\n".encode("latin-1"))
            f.write(b"0000000000 65535 f \n")
            for offset in xref[1:]:
                f.write(f"{offset:010d} 00000 n \n".encode("latin-1"))
            
            trailer = f"trailer\n<< /Size {len(xref)} /Root 1 0 R >>\nstartxref\n{xref_start}\n%%EOF\n"
            f.write(trailer.encode("latin-1"))

def build_pdf(output_path):
    pdf = PortfolioPDF(output_path)
    
    # ================= PAGE 1 =================
    pdf.new_page()

    # HEADER
    pdf.text(pdf.margin_x, pdf.y, "DEEPAK PRASAD SHAH", font="F2", size=18, color=(0.04, 0.08, 0.18))
    pdf.y -= 12
    pdf.text(pdf.margin_x, pdf.y, "Full-Stack Developer  |  DevOps Engineer  |  Product Designer", font="F2", size=9.5, color=(0.01, 0.52, 0.85))
    pdf.y -= 12

    # Meta banner box
    pdf.rect(pdf.margin_x, pdf.y - 17, pdf.content_width, 22, fill_color=(0.96, 0.97, 0.99), stroke_color=(0.88, 0.91, 0.95), stroke_width=0.8)
    contact_line_1 = "Email: deepakprdshah@yahoo.com   |   Phone: +91-8288997559   |   Location: India / Nepal"
    pdf.text(pdf.margin_x + 8, pdf.y - 6, contact_line_1, font="F1", size=8, color=(0.25, 0.3, 0.38))
    contact_line_2 = "Website: deepakprasadshah.com.np   |   GitHub: github.com/deiepak   |   LinkedIn: linkedin.com/in/deiepak"
    pdf.text(pdf.margin_x + 8, pdf.y - 14.5, contact_line_2, font="F1", size=8, color=(0.25, 0.3, 0.38))
    pdf.y -= 23

    # PROFESSIONAL PROFILE
    pdf.section_header("Professional Profile")
    summary = (
        "Computer Science & Engineering undergraduate at Chandigarh University (Batch of 2028). Active Frontend & "
        "DevOps Intern at National Innovation Center (wildlife telemetry systems) and Adventure Sewa Pvt. Ltd. "
        "(hospitality management suite). Winner of Top 3 Team at SAP Hackfest 2026 out of 1,300+ participants nationwide. "
        "Holds 3 published hardware patents in counter-UAV defense and renewable energy automation. Proven track record "
        "of deploying 10+ production client websites, managing Ubuntu Server 24 VPS infrastructure, Cloudflare DNS routing, "
        "Docker containerization, and building scalable full-stack applications."
    )
    pdf.draw_wrapped_text(summary, pdf.margin_x, font="F1", size=8.4, color=(0.22, 0.25, 0.32), line_height=11.5)

    # ACTIVE INTERNSHIPS & EXPERIENCE
    pdf.section_header("Work Experience & Internships")

    # NIC
    pdf.text(pdf.margin_x, pdf.y, "Frontend Developer & DevOps Engineer", font="F2", size=9.5, color=(0.06, 0.1, 0.2))
    pdf.text(pdf.width - pdf.margin_x - 120, pdf.y, "July 2026 - Present  [Active]", font="F2", size=8, color=(0.01, 0.52, 0.85))
    pdf.y -= 9.5
    pdf.text(pdf.margin_x, pdf.y, "National Innovation Center (NIC)  -  Partially Remote  |  Wildlife Conservation Systems", font="F3", size=8, color=(0.4, 0.45, 0.5))
    pdf.y -= 8.5
    pdf.bullet("Engineered responsive React web dashboards for wildlife tracking and environmental sensor telemetry visualization.")
    pdf.bullet("Configured automated CI/CD workflows, Docker containerization, and Ubuntu Server 24 cloud VPS deployment for 99.9% uptime.")
    pdf.bullet("Collaborated with field researchers and embedded hardware engineers to bridge real-time sensor streams into web telemetry.")
    pdf.text(pdf.margin_x + 10, pdf.y, "Tech Stack: React, JavaScript, DevOps, Ubuntu Server 24, VPS Management, Docker, CI/CD, GIS/Telemetry", font="F3", size=7.8, color=(0.02, 0.45, 0.72))
    pdf.y -= 11

    # Adventure Sewa
    pdf.text(pdf.margin_x, pdf.y, "Solo Product Designer, QA Tester & DevOps Engineer", font="F2", size=9.5, color=(0.06, 0.1, 0.2))
    pdf.text(pdf.width - pdf.margin_x - 130, pdf.y, "August 2025 - Present  [Active]", font="F2", size=8, color=(0.01, 0.52, 0.85))
    pdf.y -= 9.5
    pdf.text(pdf.margin_x, pdf.y, "Adventure Sewa Pvt. Ltd.  -  Hybrid/Remote  |  Hospitality & Resort ERP Operations", font="F3", size=8, color=(0.4, 0.45, 0.5))
    pdf.y -= 8.5
    pdf.bullet("Designed full UX/UI flows and interactive prototypes in Figma for resort booking, POS billing, and adventure activity ticketing.")
    pdf.bullet("Authored automated and manual test plans ensuring high reliability for payment transactions and reservations.")
    pdf.bullet("Provisioned and hardened Ubuntu Server 24 VPS environments, automating server setups, Nginx routing, and Cloudflare DNS management.")
    pdf.text(pdf.margin_x + 10, pdf.y, "Tech Stack: Product Design, Figma, DevOps, Ubuntu Server 24, VPS Management, Cloudflare DNS, QA Testing, CI/CD", font="F3", size=7.8, color=(0.02, 0.45, 0.72))
    pdf.y -= 11

    # HACKATHON AWARDS & HONORS
    pdf.section_header("Hackathon Honors & Awards")

    pdf.text(pdf.margin_x, pdf.y, "Top 3 Team  -  SAP Hackfest 2026", font="F2", size=9, color=(0.06, 0.1, 0.2))
    pdf.text(pdf.width - pdf.margin_x - 120, pdf.y, "National Podium  |  2026", font="F2", size=8, color=(0.85, 0.55, 0.05))
    pdf.y -= 9
    pdf.bullet("Secured a top 3 finish out of 1,300+ participants nationwide. Identified a friction-heavy real-world enterprise problem and engineered an end-to-end technical solution evaluated by senior SAP leadership and industry judges.")
    pdf.y -= 2

    pdf.text(pdf.margin_x, pdf.y, "Ranked 3 / 300 Teams  -  Desert Offroad AI Challenge", font="F2", size=9, color=(0.06, 0.1, 0.2))
    pdf.text(pdf.width - pdf.margin_x - 120, pdf.y, "Hackathon Award  |  2025", font="F2", size=8, color=(0.85, 0.55, 0.05))
    pdf.y -= 9
    pdf.bullet("Developed Desert Offroad Navigator - a real-time computer vision terrain segmentation and NLP voice guidance system for extreme terrain drivers, securing 3rd place out of 300 competing teams.")
    pdf.y -= 4

    # PUBLISHED PATENTS
    pdf.section_header("Published Patents")
    patents_data = [
        ("Drone Immobilization Over 2.4GHz", "Flagship Official Published Patent", "Design and implementation of a RF jamming system that safely immobilizes unauthorized drones operating on 2.4GHz bands with controlled disruption and minimal collateral interference. (RF Engineering, Counter-UAV, Embedded Systems)"),
        ("Solar Panel Surface Cleaning System", "Official Published Patent", "Automated low-water mechatronic cleaning mechanism for solar arrays to prevent dust accumulation and maximize photovoltaic energy yield. (Mechatronics, Control Systems, Sustainability)"),
        ("Mechanized Lifting System", "Official Published Patent", "Mechanized load handling mechanism engineered for constrained industrial spaces with high operator safety and ergonomic leverage. (CAD, Mechanical Design, Safety Engineering)"),
    ]
    for p_title, p_badge, p_desc in patents_data:
        pdf.text(pdf.margin_x, pdf.y, p_title, font="F2", size=9, color=(0.06, 0.1, 0.2))
        pdf.text(pdf.width - pdf.margin_x - 135, pdf.y, p_badge, font="F3", size=7.8, color=(0.01, 0.52, 0.85))
        pdf.y -= 8.5
        pdf.draw_wrapped_text(p_desc, pdf.margin_x + 8, font="F1", size=8, color=(0.25, 0.28, 0.35), line_height=10.5, max_chars=96)
        pdf.y -= 3

    # ================= PAGE 2 =================
    pdf.new_page()

    # PRODUCTION PROJECTS
    pdf.section_header("Key Production Deployments & Software Projects")
    projects_data = [
        ("Department Event Registration & Instant Verification System", "Production Deployed - College Department", "High-concurrency competition and event registration portal with tamper-proof QR code pass generation, organizer scanning interface for instant entry verification, and administrative analytics. Hosted on Ubuntu Server 24 VPS with Docker, Nginx, and Cloudflare DNS."),
        ("Commercial & Freelance Business Websites (10+ Deployed)", "10+ Deployed Production Sites", "Engineered and deployed 10+ custom commercial websites and platforms (e-commerce, corporate portfolios, booking systems, dynamic RSVP portals) with React, Next.js, WordPress, Cloudflare DNS, and 95+ Google Lighthouse scores."),
        ("CU Management System Staff Portal", "Live in Production (staff.cuchd.in)", "Product Designer for staff-facing CU Management System 2.0 at Chandigarh University, improving support ticketing UX, interface architecture, and resolution workflows."),
        ("Real-Time Screen Sharing & Stream Tool", "Docker Containerized on Render", "Low-latency browser screen sharing using WebRTC peer-to-peer data channels and Socket.IO real-time signaling with automated room management."),
        ("Agri_Doctor - 3-Tier AI Plant Health System", "AI / Agritech", "Intelligent plant disease detection engine integrating computer vision, interactive Akinator-style diagnostic tree, and regional GIS disease trend mapping."),
        ("Algolabs - Algorithm Execution Visualizer", "EdTech Learning Platform", "Interactive platform for mastering Data Structures and Algorithms with real-time animated Canvas and D3.js step-by-step visualizations."),
        ("IoT Smart Irrigation Controller", "Hardware / Firmware Prototype", "Automated smart irrigation system built on ESP32, soil moisture probes, temperature sensors, and weather forecast APIs."),
    ]
    for p_title, p_badge, p_desc in projects_data:
        pdf.text(pdf.margin_x, pdf.y, p_title, font="F2", size=9, color=(0.06, 0.1, 0.2))
        pdf.text(pdf.width - pdf.margin_x - 150, pdf.y, p_badge, font="F3", size=7.8, color=(0.01, 0.52, 0.85))
        pdf.y -= 9
        pdf.draw_wrapped_text(p_desc, pdf.margin_x + 8, font="F1", size=8, color=(0.25, 0.28, 0.35), line_height=11, max_chars=96)
        pdf.y -= 3.5

    # TECHNICAL SKILLS
    pdf.section_header("Technical Skills & Competencies")
    skills = [
        ("DevOps & Server Infrastructure", "Ubuntu Server 24 (LTS), VPS Creation & Management, Cloudflare DNS Management, Nginx Reverse Proxy, Docker Containerization, CI/CD Pipelines, Linux/SSH Administration, Server Hardening & Monitoring, Render, Vercel."),
        ("Frontend & Full-Stack Engineering", "React, Next.js, JavaScript (ES6+), TypeScript, Node.js, Express.js, Python, Flask, FastAPI, Tailwind CSS, WordPress, MongoDB, MySQL, REST APIs, WebRTC, Socket.IO, D3.js."),
        ("Product Design & Quality Assurance", "Product Design, UI/UX Wireframing, Figma Prototyping, User Journey Maps, Software QA Testing, Test Case Design, Automated Testing, Bug Tracking & System Reliability."),
        ("Embedded Systems, IoT & Hardware", "ESP32, Arduino, C/C++, RF Jamming Concepts, Sensors & Actuators, Wireless Communication, IoT Protocols."),
        ("Systems, Algorithms & Leadership", "Data Structures, Algorithms, System Architecture, GIS/Telemetry, Patent Drafting, Technical Writing, Nepalese Student Society Leadership."),
    ]
    for s_cat, s_items in skills:
        pdf.text(pdf.margin_x, pdf.y, s_cat + ":", font="F2", size=8.5, color=(0.06, 0.1, 0.2))
        pdf.draw_wrapped_text(s_items, pdf.margin_x + 180, font="F1", size=8, color=(0.25, 0.28, 0.35), line_height=11, max_chars=66)
        pdf.y -= 2.5

    # EDUCATION & ACADEMIC BACKGROUND
    pdf.section_header("Education")
    edu_list = [
        ("Bachelor of Engineering (BE) in Computer Science & Engineering", "Chandigarh University", "2024 - 2028 (Batch of 2028)"),
        ("Senior Secondary School (Class 11 - 12)", "Kendriya Vidyalaya, Embassy of India, Kathmandu", "Completed  |  Science & Mathematics Stream"),
        ("Secondary School (Up to Class 10)", "Modern Indian School, Kathmandu", "Completed"),
    ]
    for deg, inst, yr in edu_list:
        pdf.text(pdf.margin_x, pdf.y, deg, font="F2", size=8.5, color=(0.06, 0.1, 0.2))
        pdf.text(pdf.width - pdf.margin_x - 140, pdf.y, yr, font="F3", size=7.8, color=(0.01, 0.52, 0.85))
        pdf.y -= 9
        pdf.text(pdf.margin_x + 10, pdf.y, inst, font="F1", size=8, color=(0.35, 0.4, 0.45))
        pdf.y -= 9

    pdf.save()
    print(f"Successfully generated PDF: {output_path} ({pdf.page_num} pages)")

if __name__ == "__main__":
    build_pdf("public/deepak_shah_portfolio_data.pdf")
    build_pdf("deepak_shah_portfolio_data.pdf")
