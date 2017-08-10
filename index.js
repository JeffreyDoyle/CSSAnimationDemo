/**
 * Created by jeffreydoyle on 2017-08-08.
 */


function addActivatedClass() {
    document.getElementById('wallOfYays').classList.add('activated');

    setTimeout(() => {
        document.getElementById('wallOfYays').classList.remove('activated');
    }, 2000)
}


function toggleModal() {
    if (document.getElementById('modalToggle').classList.contains('activated')) {
        document.getElementById('modalToggle').classList.remove('activated');
        document.getElementById('menu').classList.remove('menuActivated');
    } else {
        document.getElementById('modalToggle').classList.add('activated');
        document.getElementById('menu').classList.add('menuActivated');
    }
}


function addUrl() {
    if (document.getElementById('img').classList.contains('loaded')) {
        document.getElementById('img').classList.remove('loaded');
        setTimeout(function() {
            document.getElementById('img').classList.remove('addUrl');
        }, 1000)
    } else {
        document.getElementById('img').classList.add('addUrl');
        setTimeout(function () {
            document.getElementById('img').classList.add('loaded');
        }, 1000)
    }
}

