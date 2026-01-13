let count = 0;

function nextPage(pageNumber) {
    // Барлық беттерді жасыру
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // Керекті бетті көрсету
    document.getElementById('page' + pageNumber).classList.add('active');
}

function reveal(element, text) {
    if (!element.classList.contains('revealed')) {
        element.innerHTML = text;
        element.classList.add('revealed');
        count++;
    }
    
    // Барлық 5 карта ашылғанда "Next" батырмасын көрсету
    if (count === 5) {
        document.getElementById('finalBtn').style.display = 'inline-block';
    }
}