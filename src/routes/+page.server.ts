import { supabase } from '$lib/db/supabaseClient';
import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';


const schema = z.object({
    firstname: z.string().min(3),
    lastname: z.string().min(3),
    contactNumber: z.string().min(10),
    email: z.string().email(),
    inquiry: z.string().max(500)
    });

export const load = async () => {
    const form = await superValidate(zod(schema));

    return { form }
};

export const actions = {
    default: async ({ request }) => {
      const form = await superValidate(request, zod(schema));
  
      if (!form.valid) {
        return fail(400, { form });
      }

      console.log(form.data)
    
    const { data, error } = await supabase
    .from('leads')
    .insert([
    { 
        firstname: `${form.data.firstname}`,
        lastname: `${form.data.lastname}`,
        contactNumber: `${form.data.contactNumber}`,
        email: `${form.data.email}`, 
        inquiry: `${form.data.inquiry}`
    },
    ])
    .select()

    if(error) {
        return message(form, "You have already made an inquiry, please wait for us to contact you.")
    }
    return message(form, "We have received your inquiry. We will contact you shortly.")
    }
};