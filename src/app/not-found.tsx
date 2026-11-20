import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function NotFound(){return <section className="error-page"><div className="container"><div className="eyebrow eyebrow--light"><span className="eyebrow-line"/> 404 / PAGE NOT FOUND</div><h1>This path doesn't exist.<br/><em>Let's find a better one.</em></h1><p>The page may have moved, or the link may be incorrect.</p><Link href="/">Back to homepage <ArrowUpRight size={18}/></Link></div></section>}
