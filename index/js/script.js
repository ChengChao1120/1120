document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单的默认提交行为

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`收到你的信息！\n名字: ${name}\n邮箱: ${email}\n信息: ${message}`);

    // 可以在这里添加发送邮件的代码（例如使用AJAX或Fetch API）
    // 这里只是简单地显示一个alert作为示例

    // 清空表单
    document.getElementById('contactForm').reset();
});