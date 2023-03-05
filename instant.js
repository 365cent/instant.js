document.querySelectorAll('a').forEach(link => {
            link.addEventListener('mouseover', (e) => {
                fetch(e.target.href, {
                    method: 'GET',
                    mode: 'no-cors'
                })
            });
        });
