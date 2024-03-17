<section>
    <div>
        <h2 class="hidden">My Work</h2>
        <p class="hidden">This project showcases some of my best work. This new landing page was created specifically for the BC branches of Code Ninjas. This site features a form that captures UTM parameters for precise marketing analytics.</p>
        <p class="hidden">The website will be finished within the week. We will then give it a domain and work on SEO.</p>
    </div>
    <div>
        <h3 class="hidden">Code Ninjas BC Landing Page</h3>
        <a href="https://codeninjas-nine.vercel.app" class="hidden">
            <img src="/images/project.png" alt="">
        </a>
    </div>
</section>

<style lang="scss">
    section {
        display: flex;
        justify-content: center;
        gap: 4em;
        background-color: #212227;
        padding: 4em;

        div {
            display: flex;
            flex-direction: column;
            gap: 1em;
            width: 40%;
            min-width: 300px;
            position: relative;
            background-color: transparent;

            &:last-of-type {
                align-items: center;
                gap: 1em;
            }
        }

        p, h2, h3 {
            max-width: 30em;
            color: white;
            background-color: transparent;
        }

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            position: relative;
            width: 100%;
            background-color: transparent;

            img {
                min-width: 320px;
                width: 80%;
                border-radius: 1em;
                border: solid 0.25em rgb(218, 218, 218);

                &:hover {
                    filter: grayscale(80%);
                }
            }
        }
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