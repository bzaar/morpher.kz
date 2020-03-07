window.funcions = {
    focusSearchInput: function () {
        document.getElementById('searchInput').focus();
    },
    addEvent: function () {
        const spans = document.querySelectorAll('.target');
        
        spans.forEach(span => span.style.cursor = 'pointer');
        
        spans.forEach(span => span.addEventListener('click', function (event) {
            event.preventDefault();

            document.querySelectorAll('.target')
                .forEach(span => span.style.textDecorationLine = 'none');

            span.style.textDecorationLine = 'underline';
            document.getElementById('searchInput').value = span.innerText.trim();
        }));
    }
};