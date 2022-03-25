function submitData () {
    const nama = document.getElementById('nama').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value
    const emailReceiver = 'yusuffauziyan@gmail.com'

    console.log(nama);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    if (nama == '') {
        return alert ('Nama Wajib diisi');
    } else if (email == '') {
        return alert ('Email wajib di isi');
    } else if (phone == '') {
        return alert ('No Telp wajib di isi');
    } else if (subject == '') {
        return alert ('Pilih Subject');
    } else if (message == '') {
        return alert ('Pesan wajib di isi');
    }
    
    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo Nama saya ${nama}. No Handphone: ${phone}. Pesan: ${message}`
    a.click()

    let dataObject = {
        namaLengkap: nama,
        email: email,
        phoneNumber: phone,
        subject: subject,
        message: message
    }

    console.log(dataObject);
    window.location.reload();
}


// ===PROJECT===
let blogs = []

function addBlog(event) {
    event.preventDefault();

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let image = document.getElementById('file-upload').files;

    image = URL.createObjectURL(image[0]);

    let blog = {
        title: title,
        description : description,
        image : image
    };

    blogs.push(blog);
    console.log(blogs);
    
    renderBlog();
}


function renderBlog() {
    
    document.getElementById('contents').innerHTML = "";
    for (let i in blogs) {
        document.getElementById('contents').innerHTML +=
        `
            <div class="card">
                <div class="card-header">
                    <img src=${blogs[i].image} alt="" class="card-image">
                </div>
                <div class="card-body">
                    <h4>${blogs[i].title} </h4>
                    <a href="project/project7.html">
                        View More <i class='bx bx-right-arrow-alt'></i>
                    </a>
                    <span>Game</span>
                    <p>${blogs[i].description}</p>
                </div>
                <div class="card-footer">
                    <div class="card-icon">
                        <i class='bx bxl-steam'></i>
                        <i class='bx bxl-java' ></i>
                        <i class='bx bxl-apple' ></i>
                    </div>
                </div>
                <div class="card-button">
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>
        `
    };
};




