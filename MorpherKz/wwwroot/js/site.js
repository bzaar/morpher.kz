window.funcions = {
    focusSearchInput: function () {
        document.getElementById('searchInput').focus();
    },
    addEvent: function () {
        document.querySelectorAll('.target')
            .forEach(span => span.addEventListener('click', function (event) {
                event.preventDefault();

                document.querySelectorAll('.target')
                    .forEach(span => span.style.textDecorationLine = 'none');

                span.style.textDecorationLine = 'underline';
                document.getElementById('searchInput').value = span.innerText.trim();
            }));
    }
};