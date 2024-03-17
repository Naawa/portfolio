import { supabase } from '$lib/db/supabaseClient';
import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';


const schema = z.object({
    dojo: z.string().default('Select A Location'),
    parentFirstName: z.string().min(3),
    parentLastName: z.string().min(3),
    contactNumber: z.string().min(10),
    childFirstName: z.string().min(3),
    childLastName: z.string().min(2),
    email: z.string().email(),
    utmSource: z.string(),
    utmMedium: z.string(),
    utmCampaign: z.string(),
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
        contactNumber: `${form.data.contactNumber}`,
        email: `${form.data.email}`, 
    },
    ])
    .select()

    if(error) {
        return message(form, "You have already made an inquiry, please wait for us to contact you.")
    }
    return message(form, "We have received your inquiry. We will contact you shortly.")
    }
};