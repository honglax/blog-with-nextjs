---
tags: ['Câu chuyện lập trình', 'Web Development']
title:
  'Trình duyệt đã render một trang web như thế nào? - Phần 2'
excerpt:
  'Tiếp nối với bài viết tại phần 1, phần này chúng ta sẽ cùng tìm hiểu tiếp cách thức mà một trình duyệt Web đã render một website như thế nào.'
date: '2021-03-03'
coverImage: '/images/posts/how-browser-renders-a-web-page/cover.png'
---

Tiếp nối với bài viết tại [phần 1](https://blog.hongla.dev/posts/how-browser-renders-a-web-page-p1), phần này chúng ta sẽ tiếp tục tìm hiểu cách thức mà một trình duyệt Web đã render một website như thế nào.

## Giải thích một số thuật ngữ

- **HTML**: **Hypertext Markup Language** - là một ngôn ngữ đánh dấu được thiết kế ra để tạo nên các trang web trên World Wide Web.
- **CSS**: **Cascading Style Sheets** - là một ngôn ngữ được sử dụng để **tìm và định dạng** lại các phần tử được tạo ra bởi các ngôn ngữ đánh dấu (ví dụ như **HTML**).
- **JavaScript**: là một ngôn ngữ lập trình hoặc ngôn ngữ kịch bản cho phép triển khai những chức năng phức tạp trên trang web như hiển thị các cập nhật nội dung kịp thời, tương tác với bản đồ, hoạt cảnh 2D/3D...
- **DOM**: **Document Object Model** - là một giao diện lập trình ứng dụng, có dạng một cây cấu trúc dữ liệu, được dùng để truy xuất các tài liệu dạng **HTML** và **XML**.
- **CSSOM**: **CSS Object Model**.
- **Render tree**: Là sự kết hợp của **DOM** và **CSSOM**, biểu diễn tất cả những gì sẽ được website render theo cấu trúc dạng cây.
- **Parser**: Trình phân tích cú pháp.
- **Fetch**: Truy cập đến nơi chứa tài nguyên (server, database...) để lấy tài nguyên về cho website.
- **Attribute**: Thuộc tính - Được sử dụng trong các thẻ HTML, CSS và JavaScript.

## Quy trình render một website có thể được chia thành các giai đoạn chính như sau

 1. [Phân tích cú pháp **HTML**.](http://blog.hongla.dev/posts/how-browser-renders-a-web-page-p1#step-1)
 2. [Fetch những tài nguyên từ bên ngoài hệ thống.](http://blog.hongla.dev/posts/how-browser-renders-a-web-page-p1#step-2)
 3. [Parse cú pháp **CSS** và xây dựng **CSSOM**.](http://blog.hongla.dev/posts/how-browser-renders-a-web-page-p1#step-3)
 4. [Thực thi **JavaScript**](#step-4).
 5. [Hợp nhất **DOM** và **CSSOM** để xây dựng **Render tree**.](#step-5)
 6. [Tính toán bố cục và **render website**.](#step-6)

### Trong phần 2, chúng ta sẽ tìm hiểu 3 giai đoạn cuối từ giai đoạn 4 đến giai đoạn 6.

## <a name='step-4'></a> Giai đoạn 4: Thực thi JavaScript

![Thực thi JavaScript](/images/posts/how-browser-renders-a-web-page/step-4.png)

Các trình duyệt khác nhau sẽ có các **JavaScript engine** khác nhau để thực hiện các tác vụ phân tích cú pháp, biên dịch, và phiên dịch các dòng lệnh **JavaScript**. Không đơn giản như **HTML** hay **CSS**, việc phân tích cú pháp **JavaScript** có thể là một quá trình phức tạp, gây tốn kém về mặt tài nguyên phần cứng. Do đó, việc tối ưu hóa **JavaScript** là cực kỳ quan trọng để đạt được hiệu suất tối đa cho website.

### Load events

Một khi JavaScript đã được tải đồng bộ, DOM đã được phân tích cú pháp và sẵn sàng, sự kiện **document.DOMContentLoaded** sẽ được phát ra (**emitted**). Thông thường với một lập trình viên **JS**, họ sẽ đợi sự kiện trên được phát ra trước khi thực thi bất kỳ dòng lệnh nào yêu cầu quyền truy cập đến DOM - ví dụ như tương tác với các đối tượng trên DOM hoặc lắng nghe các sự kiện tương tác của người dùng (click, input, keyUp, keyDown, etc...)

```javascript
document.addEventListener('DOMContentLoaded', (event) => {
  // Các dòng lệnh tương tác với DOM
  const catLovers = document.getElementsByClassName('cat-lover')
})
```

Tiếp theo sự kiện **DOMContentLoaded**, sau khi những thứ khác như **async JavaScript, hình ảnh, etc...** được tải xong thì sự kiện **window.load** sẽ được kích hoạt.

```javascript
window.addEventListener('load', (event) => {
  // Trang web đã được tải xuống đầy đủ

  const registerButton = document.getElementById('register-btn')
  registerButton.addEventListener('click', (event) => {
    // Xử lý luồng đăng ký
  })
})
```

## <a name='step-5'></a> Giai đoạn 5: Hợp nhất DOM và CSSOM để xây dựng Render tree

![Merge DOM and CSSOM](/images/posts/how-browser-renders-a-web-page/step-5.png)

Như phần giải thích thuật ngữ đã mô tả thì **render tree** là sự kết hợp của **DOM** và **CSSOM**, đại diện cho mọi thứ sẽ được hiển thị trên trang web. Tuy nhiên, không phải **HTML Element** nào được định nghĩa thì sẽ được hiển thị. Đối với các **Element** có thuộc tính **CSS** là `opacity: 0;`, và `visibility: hidden;` tuy không được hiển thị nhưng vẫn chiếm một khoảng không gian tương ứng với kích thước của **Element** đó. Trong khi **Element** có thuộc tính **CSS** `display: none;` sẽ không được hiển thị và không chiếm khoảng không gian tương ứng nào cả. Hình minh họa dưới đây sẽ làm rõ định nghĩa trên.

### Trạng thái bình thường

![Normal stage](/images/posts/how-browser-renders-a-web-page/normal-stage.png)

### Opacity: 0

![Opacity: 0](/images/posts/how-browser-renders-a-web-page/opacity-0.png)

### Visibility: hidden

![Visibility: hidden](/images/posts/how-browser-renders-a-web-page/visibility-hidden.png)

### Display: none

![Display: none](/images/posts/how-browser-renders-a-web-page/display-none.png)

Đối với các thẻ đặc thù như thẻ **&lt;head&gt;** không chứa các ****Element trong DOM** thì sẽ được bỏ qua mà không hiển thị. Và cũng giống như các **JavaScript engine** thì mỗi trình duyệt cũng sẽ có các [Render engine khác nhau](https://en.wikipedia.org/wiki/Comparison_of_browser_engines).

## <a name='step-6'></a> Giai đoạn 6: Tính toán bố cục và render website

![Tính toán bố cục và render website](/images/posts/how-browser-renders-a-web-page/step-6.png)

Sau quá trình kết hợp **DOM** và **CSSOM** thì **Render tree** đã được hoàn thiện. Tại thời điểm này, trình duyệt web đã biết được sẽ phải render những gì dựa trên **render tree** nhưng nó vẫn chưa biết phải render ở đâu (vị trí nào, kích thước bao nhiêu). Vì thế, bố cục của trang web cần phải được tính toán dựa trên các thuộc tính của từng **HTML Element**. **Rendering engine** duyệt qua **render tree**, bắt đầu từ đỉnh trên cùng và đi xuống dưới theo chiều dọc, tính toán tọa độ mà tại đó mỗi **HTML Node** sẽ được hiển thị. Sau khi hoàn tất, trình duyệt sẽ dựa trên thông tin của bố cục để render lên màn hình.

Và **tadaa**, sau tất cả các giai đoạn trên, chúng ta đã có một **website** được render đầy đủ.
