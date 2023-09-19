import {sanityClient} from '@sanity/client';
import {ImageUrlBuilder} from '@sanity/image-url';
// import sanityCli from "../sanity_ecommerce/sanity.cli";


const client = sanityClient({
    projectId: "cwa6vpvw",
    dataset:"production",
    apiversion: "2023-04-11",
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN

})

export default client;

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

