<script lang="ts">
	import { page } from "$app/stores";
	import SuperDebug, { superForm } from "sveltekit-superforms";


    export let data: any;
	const { form, errors, constraints, message, enhance } = superForm(data.form);

    $form.utmSource = $page.url.searchParams.get("utm_source");
    $form.utmMedium = $page.url.searchParams.get("utm_medium");
    $form.utmCampaign = $page.url.searchParams.get("utm_campaign");
</script>

<section id="contact">
    <p class="hidden">GET IN TOUCH</p>
    {#if $message}
        <h4>
            {$message}
        </h4>
    {:else}
        <form method="POST" use:enhance class="hidden">
            <input 
                type="text" 
                name="firstname" placeholder="First Name" bind:value={$form.firstname}  {...$constraints.firstname}
                aria-invalid={$errors.firstname ? 'true' : undefined}>

            <input 
                type="text" 
                name="lastname" 
                placeholder="Last Name" 
                bind:value={$form.lastname}  {...$constraints.lastname}
                aria-invalid={$errors.lastname ? 'true' : undefined}>
            {#if $errors.firstname}<span class="invalid">{$errors.name}</span>{/if}
            {#if $errors.lastname}<span class="invalid">{$errors.name}</span>{/if}
            <input 
            type="text" 
            name="contactNumber" 
            placeholder="(000)-000-0000" bind:value={$form.contactNumber}  {...$constraints.contactNumber}
            aria-invalid={$errors.contactNumber ? 'true' : undefined} maxlength="10">

            <input 
            type="email" 
            name="email" 
            placeholder="email@example.com" bind:value={$form.email}  {...$constraints.email}
            aria-invalid={$errors.email? 'true' : undefined}>

            <input 
            type="text" 
            name="inquiry" 
            placeholder="Your message..." bind:value={$form.inquiry}  {...$constraints.inquiry}
            aria-invalid={$errors.inquiry? 'true' : undefined}>
            <button>Submit</button>
        </form>
    {/if} 
    <p class="hidden">Or email me at <b>naous.dev@outlook.com.</b></p>
</section>

<style lang="scss">
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        gap: 2em;
        width: 100%;
        height: fit-content;
        margin: 8em 0;
        padding: 20dvw;

        p {
            letter-spacing: 0.1em;
            font-weight: 900;
            font-size: 1.25em;
            &:last-of-type {
                letter-spacing: normal;
                font-weight: 400;
                font-size: 1em;
            }
        }

        form {
            padding: 4em 2em;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            flex-direction: column;
            gap: 1em;
            width: 100%;
            background-color: #212227;
            border-radius: 0.5em;
            box-shadow: 0 0.05em 1em #21212180;
            min-width: 300px;

            span {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                gap: 1em;
                background-color: transparent;
            }

            button {
                background-color: white;
                color: #212227;
                width: 8em;
                height: 3em;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0.5em 0 0;
                &:hover {
                    background-color: rgb(224, 224, 224);
                }
            }
        }
    }
</style>