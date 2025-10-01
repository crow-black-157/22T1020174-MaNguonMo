const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Thiết lập EJS làm view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Phục vụ các tệp tĩnh từ thư mục 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Dữ liệu CV
const cvData = {
    name: "Nguyễn Hữu Khánh",
    title: "Student",
    dob: "31/01/2004",
    phone: "+84868922834",
    email: "khanhnguyen31012000@gmail.com",
    address: "Nam Dan, Nghe An",
    avatar: "/images/avatar.jpg",
    // Gợi ý mục tiêu ngắn hạn, bạn có thể chọn mục tiêu phù hợp nhất
    careerObjective: "Là sinh viên năm cuối ngành Công nghệ Thông tin với niềm đam mê khám phá và áp dụng công nghệ để giải quyết vấn đề. Có kinh nghiệm thực tế qua việc tự mày mò cài đặt, tối ưu hóa hệ điều hành và phát triển các công cụ tự động hóa nhỏ. Với nền tảng kiến thức về các ngôn ngữ C++, Python, Java, và luôn hứng thú tìm hiểu các thuật toán mới, tôi tự tin vào khả năng học hỏi nhanh và mong muốn được cống hiến trong một môi trường chuyên nghiệp.",
    workExperience: [
        {
            company: "09/2023 - 12/2023",
            position: "Dự án: Trợ lý AI điều khiển nhà thông minh",
            responsibilities: [
                "Tích hợp OpenAI API để xử lý ngôn ngữ tự nhiên và hiểu lệnh của người dùng.",
                "Sử dụng LiveKit API để truyền tải âm thanh và tín hiệu điều khiển theo thời gian thực.",
                "Phát triển logic để phiên dịch lệnh thành hành động điều khiển thiết bị."
            ],
            achievements: "Công nghệ sử dụng: OpenAI API, LiveKit API, Python]"
        },
        {
            company: "25/08/2025-30/08/2025",
            position: "Dự án: Tool tự động hóa nhận xu livestream Shopee",
            responsibilities: [
                "Sử dụng ADB để gửi lệnh điều khiển từ máy tính đến thiết bị Android.",
                "Viết kịch bản mô phỏng chính xác các hành động của người dùng (chạm, lướt).",
                "Tối ưu hóa kịch bản để công cụ hoạt động ổn định và hiệu quả, tiết kiệm thời gian đáng kể."
            ],
            achievements: "Công nghệ sử dụng: ADB, Tesseract_OCR, Python]"
        },
        {
            company: "05/2024 - 06/2024",
            position: "Dự án: Công cụ dịch thuật game sử dụng API",
            responsibilities: [
                "Tích hợp API dịch thuật của OPENAI API để xử lý văn bản.",
                "Xây dựng phương thức trích xuất văn bản trong game.",
                "Chứng tỏ khả năng tích hợp và xử lý API thành công để giải quyết một nhu cầu thực tế."
            ],
            achievements: "Công nghệ sử dụng: OpenAI API, LiveKit API, Python"
        }
    ],
    education: {
        university: "Đại học Khoa Học - Đại học Huế",
        major: "Công nghệ thông tin",
        period: "09/2022 - 05/2026",
        gpa: "GPA: 2.63"
    },
    skills: {
        basic: [
            "Ngôn ngữ lập trình: C++, Python, Java, Javascript",
            "Web cơ bản: HTML/CSS",
            "Hệ điều hành: Cài đặt, cấu hình và tối ưu hóa Windows",
            "Khác: Có kinh nghiệm viết script tự động hóa, yêu thích tìm hiểu thuật toán."
        ]
    },
    certifications: [
        // "Vui lòng bổ sung chứng chỉ (nếu có)"
    ],
    activities: [
        // "Vui lòng bổ sung các hoạt động đã tham gia (nếu có)"
    ]
};

app.get('/', (req, res) => {
    res.render('cv', { data: cvData });
});

app.listen(port, () => {
    console.log(`Ứng dụng đang chạy tại http://localhost:${port}`);
});