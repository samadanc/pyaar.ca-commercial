import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
    async redirects() {
        return [
            {
                source: '/ads.txt',
                destination: 'https://srv.adstxtmanager.com/19390/pyaar.ca',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;

// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
