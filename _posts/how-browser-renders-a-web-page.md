---
tags: ['Câu chuyện lập trình', 'Web Development']
title:
  'Trình duyệt đã render một trang web như thế nào? - Phần 1 - (Nghe giống "How
  I met your mother?" nhỉ)'
excerpt:
  'Với vai trò là một Kỹ sư phần mềm và làm việc nhiều với lập trình
  Website, mình thường xuyên phải cập nhật kiến thức cũng như các thông tin
  cần thiết liên quan đến công việc của mình để tối ưu hóa năng suất làm việc
  cũng như nâng cao năng lực của bản thân. Bạn có biết điều gì quan trọng nhất
  đối với những Kỹ sư phần mềm không?'
date: '2021-02-26'
coverImage: '/images/posts/how-browser-renders-a-web-page/cover.png'
---

## Lời mở đầu

Với vai trò là một **Kỹ sư phần mềm** và làm việc nhiều với lập trình **Website**, mình thường xuyên phải cập nhật kiến thức cũng như các thông tin cần thiết liên quan đến công việc của mình để tối ưu hóa năng suất làm việc cũng như nâng cao năng lực của bản thân. Bạn có biết điều gì quan trọng nhất đối với những **Kỹ sư phần mềm** không? Đó chính là kiến thức nền. Giống như bạn xây một căn nhà hay một công trình kiến trúc, phần móng có vững thì công trình của bạn mới có thể trụ được trước những tác động của thiên nhiên cũng như thời gian. Kiến thức nền tảng đối với mình cũng vậy. Bài viết dưới đây được mình dịch từ [bài viết gốc](https://dev.to/jstarmx/how-the-browser-renders-a-web-page-1ahc) trên diễn đàn chia sẻ kinh nghiệm lập trình [Dev.to](https://dev.to) của tác giả [jstarmx](https://dev.to/jstarmx). Bài chia sẻ này đã giúp mình cũng như các đồng nghiệp của mình hiểu thêm rất nhiều về cơ chế render một Website như thế nào. Hi vọng nó cũng sẽ cung cấp cho bạn những thông tin giá trị như vậy.

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

 1. Phân tích cú pháp **HTML**.
 2. Fetch những tài nguyên từ bên ngoài hệ thống.
 3. Parse cú pháp **CSS** và xây dựng **CSSOM**.
 4. Thực thi JavaScript.
 5. Kết hợp **DOM** và **CSSOM** để tạo ra **Render tree**.
 6. Tính toán bố cục và **render website**.

## Giai đoạn 1: Phân tích cú pháp HTML

![Phân tích cú pháp HTML](/images/posts/how-browser-renders-a-web-page/step-1.png)

Khi một trình duyệt bắt đầu nhận dữ liệu **HTML** của một website qua network, nó sẽ ngay lập tức đặt **parser** của nó hoạt động để chuyển đổi **HTML** thành **DOM**.

Bước đầu tiên của quá trình **parse** này là chia nhỏ **HTML** thành các mã thông báo đại diện cho thẻ bắt đầu (ví dụ: **&lt;html&gt;**), thẻ kết thúc (ví dụ: **&lt;/html&gt;**) và nội dung của chúng. Từ đó nó có thể xây dựng lên **DOM**.

## Giai đoạn 2: Fetch những tài nguyên từ bên ngoài hệ thống

![Fetch những tài nguyên từ bên ngoài hệ thống](/images/posts/how-browser-renders-a-web-page/step-2.png)

Khi **parser** gặp một tài nguyên bên ngoài như các file **CSS** hoặc **JavaScript**, trình phân tích cú pháp sẽ bắt đầu **fetch** các file đó.

Đối với các file **CSS** thì **parser** sẽ chặn không cho website được render cho đến khi các tập tin **CSS** đã được tải và được phân tích thành công. Thông thường trong một website thì **CSS** có thể được nhúng theo 3 cách là **Inline**, **Internal**, và **External**.

Đối với các file **JavaScript** thì phương thức hoạt động hơi khác một chút. Theo mặc định, thì quá trình tải và parse các file JavaScript cũng quá trình parse cú pháp HTML và render website. Tuy nhiên, người ta đã tạo ra cách để website vẫn có thể tiếp tục render trong khi fetch các file JavaScript. Có hai **attributes** có thể được thêm vào thẻ **&lt;script&gt;** để giải quyết điều đó: `defer (trì hoãn)` và `async (bất đồng bộ)`. Cả hai đều cho phép quá trình **parse** và **render** tiếp tục trong khi các file **JavaScript** được tải ở chế độ nền. Tuy nhiên `defer` và `async` hoạt động theo hai cơ chế khác nhau.

`defer` - đúng như cái tên của nó - có nghĩa là việc thực thi các file **JavaScript** này sẽ bị trì hoãn cho đến khi quá trình **parse HTML** hoàn tất (dù cho các file **JavaScript** này đã được tải xong). Nếu nhiều tệp có **attribute** là `defer`, chúng sẽ được thực thi theo thứ tự trong file **HTML**.

```html
<script type="text/javascript" src="script-1.js" defer />
<script type="text/javascript" src="script-2.js" defer />
```

Với ví dụ phía trên thì sau khi quá trình **parse HTML** hoàn thành, chắc chắn file `script-1.js` sẽ được thực thi trước file `script-2.js` dù cho file `script-2.js` có được tải xuống xong trước file `script-1.js` hay không.

`async` có nghĩa là các file **JavaScript** sẽ được thực thi ngay sau khi được tải xuống thành công, có thể là trong hoặc sau quá trình **parse HTML** (tùy thuộc vào nhiều yếu tố khách quan như tốc độ đường truyền trong network, kích thước file...). Do đó thứ tự thực thi của các file này sẽ không nhất thiết đúng với thứ tự trong file **HTML**.

```html
<script type="text/javascript" src="script-3.js" async />
<script type="text/javascript" src="script-4.js" async />
```

Còn đối với ví dụ của `async` thì cứ mỗi khi file **JavaScript** nào được tải xuống thành công, nó sẽ được thực thi.

### Tải trước các tài nguyên (Preloading resources)

Khi truy cập một website, các trình duyệt sẽ gửi nội dung của file **HTML** đến máy chủ, phân tích nội dung của nó, và gửi các yêu cầu riêng cho bất kỳ nguồn tài nguyên nào được tham chiếu đến (referenced resource). Một người kỹ sư phần mềm chuyên về lập trình Website cần biết về tất cả các nguồn tài nguyên mà trang của họ đang lập trình cần và cái nào trong số đó là quan trọng nhất. Và họ có thể sử dụng hiểu biết đó để yêu cầu các tài nguyên quan trọng (critical resources) trước và qua đó giúp tăng tốc quá trình tải. Bằng cách **preload** một tài nguyên nhất định, người kỹ sư nói với trình duyệt rằng họ muốn  **tìm và tải xuống nó sớm hơn so với để trình duyệt tự phát hiện ra tài nguyên đấy theo mặc định thông thường**. Trình duyệt sẽ cache các tài nguyên đã được **preload**, vì thế chúng có khả năng được cung cấp ngay lập tức khi trình duyệt cần đến. Để đánh dấu tài nguyên nào là quan trọng và có nhiều khả năng được tải xuống sớm hơn trong quá trình render, có thể sử dụng thẻ liên kết với **attribute** `rel = "preload"`. Danh sách các phiên bản trình duyệt đã hỗ trợ **preload** được liệt kê ở [đây](https://caniuse.com/?search=preload).

```html
<link rel="preload" as="style" href="style.css" />
<link rel="preload" as="script" href="critical.js" />
```

Đi kèm với **preload** thì chúng ta sẽ có attribute `as` đi kèm giúp trình duyệt nhận biết kiểu của tài nguyên đang được ưu tiên tải về là gì. Các giá trị của as được liệt kê tại [đây](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attributes).

## Giai đoạn 3: Parse cú pháp CSS và xây dựng CSSOM

![Parse cú pháp CSS và xây dựng CSSOM](/images/posts/how-browser-renders-a-web-page/step-3.jpeg)

Mô hình đối tượng **CSS** (**CSSOM**) là một bản đồ của tất cả các selectors **CSS** và các thuộc tính có liên quan cho mỗi selector ở dạng cây, với một node gốc (**root**), các node anh chị em (**siblings**), các node hậu duệ (**descendants**), node con (child), và các node có mối quan hệ khác. **CSSOM** rất giống với **DOM**. Cả hai đều là một phần của một loạt các bước phải thực hiện để hiển thị đúng một website.

**CSSOM**, cùng với **DOM**, được dùng để xây dựng **render tree** - được trình duyệt sử dụng để sắp xếp và hiển thị website.

Tương tự như **DOM** và các file **HTML**, khi các file **CSS** được tải, chúng phải được parse cú pháp và chuyển đổi thành dạng cây - lần này là **CSSOM**. Nó mô tả tất cả các selectors CSS trên trang, hệ thống phân cấp và thuộc tính của chúng.

Điểm khác biệt của **CSSOM** với **DOM** là nó không thể được xây dựng một cách tăng dần, vì các quy tắc **CSS** có thể ghi đè lẫn nhau ở nhiều điểm khác nhau hoặc nhiều file khác nhau do tính [đặc thù của CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity). Đây là lý do tại sao **CSS** làm quá trình render website bị chặn, vì chỉ khi nào tất cả **CSS** được parse cú pháp và **CSSOM** được xây dựng thành công, thì trình duyệt mới biết được vị trí và vị trí của từng phần tử (element) trên màn hình.

<p style="margin-top: 2rem!important;">Còn tiếp...</p>
