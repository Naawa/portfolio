<section>
    <div>
        <div>
            <b class="hidden">Hello, my name is Naous,</b>
            <h1 class="hidden">I'm good at building <br> Fullstack Web Applications.</h1>
        </div>
        <span>
            <p class="hidden">Experience building secure, scalable, and efficient systems with modern tech stacks.</p>
            <p class="hidden">Prioritizes communication and professionalism. Works well independantly or with a team.</p>
        </span>
    </div>
    <div>
        <div id="stack">
            <a href="https://kit.svelte.dev/"><img src="/images/svelteLogo.svg" alt="SvelteKit Logo." class="hidden"></a>
            <a href="https://supabase.com/" target="_blank"><img src="/images/supabaseLogo.svg" alt="Supabase Logo." class="hidden"></a>
            <a href="https://kit.svelte.dev/"><img src="/images/tsLogo.svg" alt="TypeScript Logo." class="hidden"></a>
            <a href="https://www.w3schools.com/html/"><img src="/images/html3Logo.svg" alt="HTML Logo." class="hidden"></a>
            <a href="https://www.w3schools.com/sass/"><img src="/images/scssLogo.svg" alt="SCSS Logo." class="hidden"></a>
            <a href="https://nodejs.org/en" class="hidden"><img src="/images/nodeJSLogo.svg" alt="NodeJS"></a>
        </div>
    </div>
</section>

<style lang="scss">
    section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 4em;
        gap: 4em;

        div {
            display: flex;
            flex-direction: column;
            gap: 2em;
            min-width: 300px;
            width: 40%;

            div {
                gap: 0.25em;
                width: 100%;
            }

            span {
                display: flex;
                gap: 2em;

                p {
                    max-width: 16em;
                }
            }

            img {
                height: clamp(4vw, 18vw, 18vh);
                padding: 1.5em;
                border: solid 0.25em rgb(218, 218, 218);
                border-radius: 2em;
                background-color: #212227;

                &:hover {
                    background-color: #616977;
                }
            }
        }
    }
    #stack {
        align-items: center;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1em;
        width: 100%;
        height: 100%;
    }
    @media (width < 1200px) {
        section {
            flex-direction: column;
            div {
                width: 100%;
            }
        }
    }
</style>