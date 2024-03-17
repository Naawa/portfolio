<nav>
    <div>NI</div>
    <div>
        <a href="https://github.com/Naawa" target="_blank"><img src="/images/githubLogo.svg" alt="Github Logo"></a>
    </div>
</nav>

<style lang="scss">
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        margin: auto;
        height: fit-content;
        margin: 0 auto 4em;

        div {
            height: 2em;
            width: 2em;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1.5em;
            
            a {
                img {
                    height: 2em;
                    width: 2em;
                    border-radius: 1em;
                }
            }

            &:first-of-type {
                background-color: #212227;
                color: white;
                font-weight: 900;
            }
        }
    }
</style>