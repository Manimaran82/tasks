import React, { useEffect, useRef } from 'react'

const Scrolling = () => {
    const homeref = useRef("")
    const aboutref = useRef("")
    const contactref = useRef("")
    const feedbackref = useRef("")

    const home = ()=>{
        homeref.current.scrollIntoView({
            behavior:"smooth"
        })
    }
     const about = ()=>{
        aboutref.current.scrollIntoView({
            behavior:"smooth"
        })
    }
     const contact = ()=>{
       contactref.current.scrollIntoView({
            behavior:"smooth"
        }) 
    }
     const feedback = ()=>{
       feedbackref.current.scrollIntoView({
            behavior:"smooth"
        }) 
    }
    const move =()=>{
        homeref.current.scrollIntoView({
            top:0,
            behavior:"smooth"
        })
    }
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[])
  return (
   <>
   <div className="min-h-screen bg-slate-100 text-slate-900">
    <div className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm px-4 py-4 flex flex-wrap gap-3 justify-center md:justify-start">
    <button onClick={home} className="rounded-full bg-sky-600 px-4 py-2 text-white shadow hover:bg-sky-700 transition">Home</button>
    <button onClick={about} className="rounded-full bg-slate-700 px-4 py-2 text-white shadow hover:bg-slate-800 transition">About</button>
    <button onClick={contact} className="rounded-full bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700 transition">Contact</button>
    <button onClick={feedback} className="rounded-full bg-violet-600 px-4 py-2 text-white shadow hover:bg-violet-700 transition">Feedback</button>
   </div>

   <section ref={homeref} className="rounded-[1.75rem] bg-white p-8 shadow-xl border border-slate-200 mb-10">
    <h1 className="text-3xl font-semibold text-slate-900 mb-4">Home</h1>
    <p className="text-slate-700 leading-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, enim beatae totam laudantium accusantium amet aliquam neque sit itaque magnam cupiditate quis earum, unde recusandae. Blanditiis cum sed minima tempore.
    Minima libero magnam, esse ipsum rem nulla tempore accusantium ea totam delectus cupiditate maiores voluptatibus id ipsa culpa vel cum dolores soluta dignissimos error ratione nesciunt dolor vitae. Illo, asperiores!
    Temporibus dicta cum, harum corrupti veniam deleniti est nihil consectetur nisi sequi error earum fugit labore tempore at itaque et, modi illum odit necessitatibus sunt perferendis magni quia ea! Velit?
    Eum ipsam quam distinctio nihil itaque explicabo dicta laudantium optio, odio excepturi ducimus, facilis cupiditate eveniet impedit dolorem nulla error ea maiores, earum iusto quidem! Ullam quas dolorum ratione distinctio!
    Labore laudantium minima exercitationem at adipisci distinctio vero hic non sed atque. Cum ex, vero at assumenda enim voluptate delectus ad tempore neque obcaecati magni fugit ab iusto quidem id?
    Nam iste officiis cumque, earum odit in voluptates placeat sequi aliquam! Dolorem quam nostrum nam ad beatae tempora possimus, vitae nulla quisquam dignissimos quis porro cum sequi consequatur alias debitis!
    Aliquid quidem expedita architecto. Nam, non voluptate reprehenderit fugiat harum aliquam incidunt natus vero quisquam necessitatibus tenetur reiciendis hic eaque quam nulla cum labore at perspiciatis, ea iste cumque! Illum!
    Cumque, autem cupiditate quasi illum hic eligendi fugiat, sapiente, repellat inventore consequatur maxime. Reprehenderit eligendi quos nobis nulla? Animi consectetur officia, magni aliquid vel labore ipsum dolorem dignissimos asperiores saepe.
    Consequatur quo ex accusamus cumque fuga autem neque expedita dicta veniam recusandae, quaerat labore consectetur molestias quidem, quisquam iure. Praesentium soluta delectus sapiente nisi mollitia dolore iste in adipisci ipsa.
    Odio ad itaque, error fugiat repellendus harum esse accusamus deserunt omnis voluptates, expedita aspernatur laboriosam incidunt optio eaque explicabo cumque! Officiis assumenda, ipsam dolor minima deleniti eveniet neque praesentium totam?
    Commodi saepe, distinctio qui rerum consectetur nam cum laudantium cupiditate repellendus, harum alias est sed eligendi ipsa expedita pariatur repudiandae magni autem ea esse obcaecati ab numquam nihil ipsum. Temporibus!
    Ipsum tempora temporibus molestias ipsa eos repellendus consectetur excepturi neque maiores ut expedita officiis id repudiandae, eius officia error alias accusantium possimus consequatur obcaecati adipisci aspernatur. Doloribus ipsum quae laudantium?
    Dolore tempore ex id! Non labore distinctio hic nobis ullam deserunt cum, ipsum consectetur amet inventore ducimus quisquam eligendi est doloribus! Esse ipsum nisi distinctio sapiente eligendi dicta, saepe provident.
    Ratione quod commodi voluptates aliquid quia impedit, debitis doloribus rem suscipit quis nam minima error cupiditate accusantium numquam recusandae! Doloremque maxime sed sunt, perspiciatis fuga dolores laudantium et a iste!
    Omnis quasi veritatis reiciendis quae quidem est nostrum recusandae esse distinctio blanditiis porro, eveniet repellat fugiat aliquam mollitia odit consequatur totam? Dignissimos, explicabo odio rerum perspiciatis et odit itaque commodi.
    Iure odit ipsa iste tempora neque, odio enim distinctio ex non, sint laboriosam, maxime natus repellendus. Tempore, optio explicabo iste, unde magni reiciendis odio illo laudantium eius nam quis ea.
    Tempore ex deleniti debitis ipsa illum odio veniam assumenda, eaque recusandae voluptatum corrupti consectetur aspernatur iure mollitia illo quos. Culpa id dolor quae dicta recusandae ipsam accusantium dignissimos repudiandae corrupti!
    Iste, voluptates nulla exercitationem, officiis mollitia sit non ad quidem doloribus et architecto ut laudantium iure libero tempore? Odio velit distinctio ducimus qui neque obcaecati modi culpa ex nisi ut!
    Consequatur, exercitationem nesciunt quisquam iste aliquam fuga! Voluptatibus est nesciunt maiores? Alias iste dolores minima illum vitae rerum odio sequi in, voluptates quaerat voluptas delectus, vel hic tenetur ut repellendus?
    Optio ducimus minima sapiente, laboriosam est adipisci impedit cum, nam accusantium, at reiciendis. Quod debitis officiis modi officia. Ratione cumque quas recusandae animi atque aspernatur repellendus minima quidem repellat. Quod!
    Similique consectetur officia quam dicta magni! Officiis dolores tenetur repudiandae facilis, ut cum nemo, accusamus reiciendis nam recusandae odit voluptatem aliquam voluptates odio, id modi sunt. Sit ab laborum at!
    Voluptatum voluptas et iste cupiditate perspiciatis explicabo voluptates vel! Dicta consequatur hic minus dolor porro cum, optio provident qui, distinctio quod eaque vel deserunt? Possimus doloremque molestias fugit sed sequi.
    Officiis odit esse hic rem? Rem impedit optio quis officiis quam, nam quisquam in velit culpa nemo similique nesciunt dolore laborum ullam distinctio eos. Quia aspernatur vitae amet. Incidunt, facere.
    Nihil qui perferendis quis molestiae sint accusamus, cum distinctio laboriosam delectus inventore. Sunt ratione minus itaque expedita, reiciendis eum quae dolore et porro distinctio sit nemo. Odio corrupti eligendi est.
    Adipisci odio magni, aliquam illo, voluptatem repellendus in quam tempora, quidem minus libero. Fugit, consequuntur? Ipsam quidem obcaecati dolorem illum blanditiis architecto voluptate, ut, eum error quibusdam officia recusandae sit.
    Deleniti fuga sit facere, dolores debitis consequuntur quas laudantium animi odit provident labore dicta ad nihil adipisci consequatur assumenda iusto in sed id nostrum eveniet nesciunt quos aliquam quibusdam. Omnis.
    Debitis, molestiae eos quibusdam tenetur praesentium quisquam beatae necessitatibus doloremque possimus. Quis corporis tempora cupiditate deserunt consequatur. Voluptate ullam repellendus ex error accusantium, ipsam laudantium neque. Architecto inventore est quia?
    Quae, sunt molestias nam corrupti vel numquam amet ipsa iusto non, minus quasi, dolor omnis! Excepturi provident, voluptates quidem recusandae, vitae, cupiditate ipsum blanditiis ducimus quis quas praesentium iure doloribus.
    Modi quae labore numquam facere. Tempora incidunt soluta, numquam pariatur sed eos possimus inventore nobis omnis odio quod rerum rem repellat recusandae iusto magni quae reiciendis molestias excepturi. Commodi, suscipit.
    Vitae enim eaque rerum earum deserunt ipsa ab odit quibusdam fugiat, odio, aliquam recusandae! Nisi, necessitatibus dolorem, amet asperiores nostrum impedit est voluptates vel aliquid, minima harum cum officiis quo!
    Error iure reprehenderit nam. Vitae enim fuga aspernatur sequi, illum quas libero cupiditate veritatis dignissimos omnis, ipsam minima eveniet? Fugit earum voluptatem illo repellendus veniam quos tenetur ipsam id atque.
    Totam, veritatis! Quasi deserunt quas ea voluptate nisi exercitationem. Veritatis in consequuntur dolorem sit dolore eaque neque aperiam corporis perferendis nihil, error, ea praesentium soluta tenetur veniam nemo iure voluptatum!
    Laborum modi odit numquam temporibus assumenda beatae incidunt et quisquam inventore maxime eveniet, excepturi dolores sapiente nihil reiciendis dolorum quam pariatur voluptates architecto nobis quos quae iste enim iure! Totam!
    Et ab nesciunt sit voluptates saepe quia, facilis quisquam ad autem cupiditate recusandae? Culpa dolorum pariatur molestias, optio nobis ipsam maiores aliquid quia quasi odio distinctio et fugiat. Ipsa, eum!
    Laudantium officia cumque iure nihil, accusantium officiis obcaecati, dolore, voluptas cum doloremque quisquam ad sit. Aperiam error porro architecto magni non repellat! Magnam tempora assumenda perspiciatis iure, quae sint cum?</p>
   </section>
   <hr/>
   
    <section ref={aboutref} className="rounded-[1.75rem] bg-white p-8 shadow-xl border border-slate-200 mb-10">
    <h1 className="text-3xl font-semibold text-slate-900 mb-4">About</h1>
    <p className="text-slate-700 leading-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, enim beatae totam laudantium accusantium amet aliquam neque sit itaque magnam cupiditate quis earum, unde recusandae. Blanditiis cum sed minima tempore.
    Minima libero magnam, esse ipsum rem nulla tempore accusantium ea totam delectus cupiditate maiores voluptatibus id ipsa culpa vel cum dolores soluta dignissimos error ratione nesciunt dolor vitae. Illo, asperiores!
    Temporibus dicta cum, harum corrupti veniam deleniti est nihil consectetur nisi sequi error earum fugit labore tempore at itaque et, modi illum odit necessitatibus sunt perferendis magni quia ea! Velit?
    Eum ipsam quam distinctio nihil itaque explicabo dicta laudantium optio, odio excepturi ducimus, facilis cupiditate eveniet impedit dolorem nulla error ea maiores, earum iusto quidem! Ullam quas dolorum ratione distinctio!
    Labore laudantium minima exercitationem at adipisci distinctio vero hic non sed atque. Cum ex, vero at assumenda enim voluptate delectus ad tempore neque obcaecati magni fugit ab iusto quidem id?
    Nam iste officiis cumque, earum odit in voluptates placeat sequi aliquam! Dolorem quam nostrum nam ad beatae tempora possimus, vitae nulla quisquam dignissimos quis porro cum sequi consequatur alias debitis!
    Aliquid quidem expedita architecto. Nam, non voluptate reprehenderit fugiat harum aliquam incidunt natus vero quisquam necessitatibus tenetur reiciendis hic eaque quam nulla cum labore at perspiciatis, ea iste cumque! Illum!
    Cumque, autem cupiditate quasi illum hic eligendi fugiat, sapiente, repellat inventore consequatur maxime. Reprehenderit eligendi quos nobis nulla? Animi consectetur officia, magni aliquid vel labore ipsum dolorem dignissimos asperiores saepe.
    Consequatur quo ex accusamus cumque fuga autem neque expedita dicta veniam recusandae, quaerat labore consectetur molestias quidem, quisquam iure. Praesentium soluta delectus sapiente nisi mollitia dolore iste in adipisci ipsa.
    Odio ad itaque, error fugiat repellendus harum esse accusamus deserunt omnis voluptates, expedita aspernatur laboriosam incidunt optio eaque explicabo cumque! Officiis assumenda, ipsam dolor minima deleniti eveniet neque praesentium totam?
    Commodi saepe, distinctio qui rerum consectetur nam cum laudantium cupiditate repellendus, harum alias est sed eligendi ipsa expedita pariatur repudiandae magni autem ea esse obcaecati ab numquam nihil ipsum. Temporibus!
    Ipsum tempora temporibus molestias ipsa eos repellendus consectetur excepturi neque maiores ut expedita officiis id repudiandae, eius officia error alias accusantium possimus consequatur obcaecati adipisci aspernatur. Doloribus ipsum quae laudantium?
    Dolore tempore ex id! Non labore distinctio hic nobis ullam deserunt cum, ipsum consectetur amet inventore ducimus quisquam eligendi est doloribus! Esse ipsum nisi distinctio sapiente eligendi dicta, saepe provident.
    Ratione quod commodi voluptates aliquid quia impedit, debitis doloribus rem suscipit quis nam minima error cupiditate accusantium numquam recusandae! Doloremque maxime sed sunt, perspiciatis fuga dolores laudantium et a iste!
    Omnis quasi veritatis reiciendis quae quidem est nostrum recusandae esse distinctio blanditiis porro, eveniet repellat fugiat aliquam mollitia odit consequatur totam? Dignissimos, explicabo odio rerum perspiciatis et odit itaque commodi.
    Iure odit ipsa iste tempora neque, odio enim distinctio ex non, sint laboriosam, maxime natus repellendus. Tempore, optio explicabo iste, unde magni reiciendis odio illo laudantium eius nam quis ea.
    Tempore ex deleniti debitis ipsa illum odio veniam assumenda, eaque recusandae voluptatum corrupti consectetur aspernatur iure mollitia illo quos. Culpa id dolor quae dicta recusandae ipsam accusantium dignissimos repudiandae corrupti!
    Iste, voluptates nulla exercitationem, officiis mollitia sit non ad quidem doloribus et architecto ut laudantium iure libero tempore? Odio velit distinctio ducimus qui neque obcaecati modi culpa ex nisi ut!
    Consequatur, exercitationem nesciunt quisquam iste aliquam fuga! Voluptatibus est nesciunt maiores? Alias iste dolores minima illum vitae rerum odio sequi in, voluptates quaerat voluptas delectus, vel hic tenetur ut repellendus?
    Optio ducimus minima sapiente, laboriosam est adipisci impedit cum, nam accusantium, at reiciendis. Quod debitis officiis modi officia. Ratione cumque quas recusandae animi atque aspernatur repellendus minima quidem repellat. Quod!
    Similique consectetur officia quam dicta magni! Officiis dolores tenetur repudiandae facilis, ut cum nemo, accusamus reiciendis nam recusandae odit voluptatem aliquam voluptates odio, id modi sunt. Sit ab laborum at!
    Voluptatum voluptas et iste cupiditate perspiciatis explicabo voluptates vel! Dicta consequatur hic minus dolor porro cum, optio provident qui, distinctio quod eaque vel deserunt? Possimus doloremque molestias fugit sed sequi.
    Officiis odit esse hic rem? Rem impedit optio quis officiis quam, nam quisquam in velit culpa nemo similique nesciunt dolore laborum ullam distinctio eos. Quia aspernatur vitae amet. Incidunt, facere.
    Nihil qui perferendis quis molestiae sint accusamus, cum distinctio laboriosam delectus inventore. Sunt ratione minus itaque expedita, reiciendis eum quae dolore et porro distinctio sit nemo. Odio corrupti eligendi est.
    Adipisci odio magni, aliquam illo, voluptatem repellendus in quam tempora, quidem minus libero. Fugit, consequuntur? Ipsam quidem obcaecati dolorem illum blanditiis architecto voluptate, ut, eum error quibusdam officia recusandae sit.
    Deleniti fuga sit facere, dolores debitis consequuntur quas laudantium animi odit provident labore dicta ad nihil adipisci consequatur assumenda iusto in sed id nostrum eveniet nesciunt quos aliquam quibusdam. Omnis.
    Debitis, molestiae eos quibusdam tenetur praesentium quisquam beatae necessitatibus doloremque possimus. Quis corporis tempora cupiditate deserunt consequatur. Voluptate ullam repellendus ex error accusantium, ipsam laudantium neque. Architecto inventore est quia?
    Quae, sunt molestias nam corrupti vel numquam amet ipsa iusto non, minus quasi, dolor omnis! Excepturi provident, voluptates quidem recusandae, vitae, cupiditate ipsum blanditiis ducimus quis quas praesentium iure doloribus.
    Modi quae labore numquam facere. Tempora incidunt soluta, numquam pariatur sed eos possimus inventore nobis omnis odio quod rerum rem repellat recusandae iusto magni quae reiciendis molestias excepturi. Commodi, suscipit.
    Vitae enim eaque rerum earum deserunt ipsa ab odit quibusdam fugiat, odio, aliquam recusandae! Nisi, necessitatibus dolorem, amet asperiores nostrum impedit est voluptates vel aliquid, minima harum cum officiis quo!
    Error iure reprehenderit nam. Vitae enim fuga aspernatur sequi, illum quas libero cupiditate veritatis dignissimos omnis, ipsam minima eveniet? Fugit earum voluptatem illo repellendus veniam quos tenetur ipsam id atque.
    Totam, veritatis! Quasi deserunt quas ea voluptate nisi exercitationem. Veritatis in consequuntur dolorem sit dolore eaque neque aperiam corporis perferendis nihil, error, ea praesentium soluta tenetur veniam nemo iure voluptatum!
    Laborum modi odit numquam temporibus assumenda beatae incidunt et quisquam inventore maxime eveniet, excepturi dolores sapiente nihil reiciendis dolorum quam pariatur voluptates architecto nobis quos quae iste enim iure! Totam!
    Et ab nesciunt sit voluptates saepe quia, facilis quisquam ad autem cupiditate recusandae? Culpa dolorum pariatur molestias, optio nobis ipsam maiores aliquid quia quasi odio distinctio et fugiat. Ipsa, eum!
    Laudantium officia cumque iure nihil, accusantium officiis obcaecati, dolore, voluptas cum doloremque quisquam ad sit. Aperiam error porro architecto magni non repellat! Magnam tempora assumenda perspiciatis iure, quae sint cum?</p>
   </section>
<hr/>
    <section ref={contactref} className="rounded-[1.75rem] bg-white p-8 shadow-xl border border-slate-200 mb-10">
    <h1 className="text-3xl font-semibold text-slate-900 mb-4">Contact</h1>
    <p className="text-slate-700 leading-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, enim beatae totam laudantium accusantium amet aliquam neque sit itaque magnam cupiditate quis earum, unde recusandae. Blanditiis cum sed minima tempore.
    Minima libero magnam, esse ipsum rem nulla tempore accusantium ea totam delectus cupiditate maiores voluptatibus id ipsa culpa vel cum dolores soluta dignissimos error ratione nesciunt dolor vitae. Illo, asperiores!
    Temporibus dicta cum, harum corrupti veniam deleniti est nihil consectetur nisi sequi error earum fugit labore tempore at itaque et, modi illum odit necessitatibus sunt perferendis magni quia ea! Velit?
    Eum ipsam quam distinctio nihil itaque explicabo dicta laudantium optio, odio excepturi ducimus, facilis cupiditate eveniet impedit dolorem nulla error ea maiores, earum iusto quidem! Ullam quas dolorum ratione distinctio!
    Labore laudantium minima exercitationem at adipisci distinctio vero hic non sed atque. Cum ex, vero at assumenda enim voluptate delectus ad tempore neque obcaecati magni fugit ab iusto quidem id?
    Nam iste officiis cumque, earum odit in voluptates placeat sequi aliquam! Dolorem quam nostrum nam ad beatae tempora possimus, vitae nulla quisquam dignissimos quis porro cum sequi consequatur alias debitis!
    Aliquid quidem expedita architecto. Nam, non voluptate reprehenderit fugiat harum aliquam incidunt natus vero quisquam necessitatibus tenetur reiciendis hic eaque quam nulla cum labore at perspiciatis, ea iste cumque! Illum!
    Cumque, autem cupiditate quasi illum hic eligendi fugiat, sapiente, repellat inventore consequatur maxime. Reprehenderit eligendi quos nobis nulla? Animi consectetur officia, magni aliquid vel labore ipsum dolorem dignissimos asperiores saepe.
    Consequatur quo ex accusamus cumque fuga autem neque expedita dicta veniam recusandae, quaerat labore consectetur molestias quidem, quisquam iure. Praesentium soluta delectus sapiente nisi mollitia dolore iste in adipisci ipsa.
    Odio ad itaque, error fugiat repellendus harum esse accusamus deserunt omnis voluptates, expedita aspernatur laboriosam incidunt optio eaque explicabo cumque! Officiis assumenda, ipsam dolor minima deleniti eveniet neque praesentium totam?
    Commodi saepe, distinctio qui rerum consectetur nam cum laudantium cupiditate repellendus, harum alias est sed eligendi ipsa expedita pariatur repudiandae magni autem ea esse obcaecati ab numquam nihil ipsum. Temporibus!
    Ipsum tempora temporibus molestias ipsa eos repellendus consectetur excepturi neque maiores ut expedita officiis id repudiandae, eius officia error alias accusantium possimus consequatur obcaecati adipisci aspernatur. Doloribus ipsum quae laudantium?
    Dolore tempore ex id! Non labore distinctio hic nobis ullam deserunt cum, ipsum consectetur amet inventore ducimus quisquam eligendi est doloribus! Esse ipsum nisi distinctio sapiente eligendi dicta, saepe provident.
    Ratione quod commodi voluptates aliquid quia impedit, debitis doloribus rem suscipit quis nam minima error cupiditate accusantium numquam recusandae! Doloremque maxime sed sunt, perspiciatis fuga dolores laudantium et a iste!
    Omnis quasi veritatis reiciendis quae quidem est nostrum recusandae esse distinctio blanditiis porro, eveniet repellat fugiat aliquam mollitia odit consequatur totam? Dignissimos, explicabo odio rerum perspiciatis et odit itaque commodi.
    Iure odit ipsa iste tempora neque, odio enim distinctio ex non, sint laboriosam, maxime natus repellendus. Tempore, optio explicabo iste, unde magni reiciendis odio illo laudantium eius nam quis ea.
    Tempore ex deleniti debitis ipsa illum odio veniam assumenda, eaque recusandae voluptatum corrupti consectetur aspernatur iure mollitia illo quos. Culpa id dolor quae dicta recusandae ipsam accusantium dignissimos repudiandae corrupti!
    Iste, voluptates nulla exercitationem, officiis mollitia sit non ad quidem doloribus et architecto ut laudantium iure libero tempore? Odio velit distinctio ducimus qui neque obcaecati modi culpa ex nisi ut!
    Consequatur, exercitationem nesciunt quisquam iste aliquam fuga! Voluptatibus est nesciunt maiores? Alias iste dolores minima illum vitae rerum odio sequi in, voluptates quaerat voluptas delectus, vel hic tenetur ut repellendus?
    Optio ducimus minima sapiente, laboriosam est adipisci impedit cum, nam accusantium, at reiciendis. Quod debitis officiis modi officia. Ratione cumque quas recusandae animi atque aspernatur repellendus minima quidem repellat. Quod!
    Similique consectetur officia quam dicta magni! Officiis dolores tenetur repudiandae facilis, ut cum nemo, accusamus reiciendis nam recusandae odit voluptatem aliquam voluptates odio, id modi sunt. Sit ab laborum at!
    Voluptatum voluptas et iste cupiditate perspiciatis explicabo voluptates vel! Dicta consequatur hic minus dolor porro cum, optio provident qui, distinctio quod eaque vel deserunt? Possimus doloremque molestias fugit sed sequi.
    Officiis odit esse hic rem? Rem impedit optio quis officiis quam, nam quisquam in velit culpa nemo similique nesciunt dolore laborum ullam distinctio eos. Quia aspernatur vitae amet. Incidunt, facere.
    Nihil qui perferendis quis molestiae sint accusamus, cum distinctio laboriosam delectus inventore. Sunt ratione minus itaque expedita, reiciendis eum quae dolore et porro distinctio sit nemo. Odio corrupti eligendi est.
    Adipisci odio magni, aliquam illo, voluptatem repellendus in quam tempora, quidem minus libero. Fugit, consequuntur? Ipsam quidem obcaecati dolorem illum blanditiis architecto voluptate, ut, eum error quibusdam officia recusandae sit.
    Deleniti fuga sit facere, dolores debitis consequuntur quas laudantium animi odit provident labore dicta ad nihil adipisci consequatur assumenda iusto in sed id nostrum eveniet nesciunt quos aliquam quibusdam. Omnis.
    Debitis, molestiae eos quibusdam tenetur praesentium quisquam beatae necessitatibus doloremque possimus. Quis corporis tempora cupiditate deserunt consequatur. Voluptate ullam repellendus ex error accusantium, ipsam laudantium neque. Architecto inventore est quia?
    Quae, sunt molestias nam corrupti vel numquam amet ipsa iusto non, minus quasi, dolor omnis! Excepturi provident, voluptates quidem recusandae, vitae, cupiditate ipsum blanditiis ducimus quis quas praesentium iure doloribus.
    Modi quae labore numquam facere. Tempora incidunt soluta, numquam pariatur sed eos possimus inventore nobis omnis odio quod rerum rem repellat recusandae iusto magni quae reiciendis molestias excepturi. Commodi, suscipit.
    Vitae enim eaque rerum earum deserunt ipsa ab odit quibusdam fugiat, odio, aliquam recusandae! Nisi, necessitatibus dolorem, amet asperiores nostrum impedit est voluptates vel aliquid, minima harum cum officiis quo!
    Error iure reprehenderit nam. Vitae enim fuga aspernatur sequi, illum quas libero cupiditate veritatis dignissimos omnis, ipsam minima eveniet? Fugit earum voluptatem illo repellendus veniam quos tenetur ipsam id atque.
    Totam, veritatis! Quasi deserunt quas ea voluptate nisi exercitationem. Veritatis in consequuntur dolorem sit dolore eaque neque aperiam corporis perferendis nihil, error, ea praesentium soluta tenetur veniam nemo iure voluptatum!
    Laborum modi odit numquam temporibus assumenda beatae incidunt et quisquam inventore maxime eveniet, excepturi dolores sapiente nihil reiciendis dolorum quam pariatur voluptates architecto nobis quos quae iste enim iure! Totam!
    Et ab nesciunt sit voluptates saepe quia, facilis quisquam ad autem cupiditate recusandae? Culpa dolorum pariatur molestias, optio nobis ipsam maiores aliquid quia quasi odio distinctio et fugiat. Ipsa, eum!
    Laudantium officia cumque iure nihil, accusantium officiis obcaecati, dolore, voluptas cum doloremque quisquam ad sit. Aperiam error porro architecto magni non repellat! Magnam tempora assumenda perspiciatis iure, quae sint cum?</p>
   </section>
<hr/>
    <section ref={feedbackref} className="rounded-[1.75rem] bg-white p-8 shadow-xl border border-slate-200 mb-10">
    <h1 className="text-3xl font-semibold text-slate-900 mb-4">Feedback</h1>
    <p className="text-slate-700 leading-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, enim beatae totam laudantium accusantium amet aliquam neque sit itaque magnam cupiditate quis earum, unde recusandae. Blanditiis cum sed minima tempore.
    Minima libero magnam, esse ipsum rem nulla tempore accusantium ea totam delectus cupiditate maiores voluptatibus id ipsa culpa vel cum dolores soluta dignissimos error ratione nesciunt dolor vitae. Illo, asperiores!
    Temporibus dicta cum, harum corrupti veniam deleniti est nihil consectetur nisi sequi error earum fugit labore tempore at itaque et, modi illum odit necessitatibus sunt perferendis magni quia ea! Velit?
    Eum ipsam quam distinctio nihil itaque explicabo dicta laudantium optio, odio excepturi ducimus, facilis cupiditate eveniet impedit dolorem nulla error ea maiores, earum iusto quidem! Ullam quas dolorum ratione distinctio!
    Labore laudantium minima exercitationem at adipisci distinctio vero hic non sed atque. Cum ex, vero at assumenda enim voluptate delectus ad tempore neque obcaecati magni fugit ab iusto quidem id?
    Nam iste officiis cumque, earum odit in voluptates placeat sequi aliquam! Dolorem quam nostrum nam ad beatae tempora possimus, vitae nulla quisquam dignissimos quis porro cum sequi consequatur alias debitis!
    Aliquid quidem expedita architecto. Nam, non voluptate reprehenderit fugiat harum aliquam incidunt natus vero quisquam necessitatibus tenetur reiciendis hic eaque quam nulla cum labore at perspiciatis, ea iste cumque! Illum!
    Cumque, autem cupiditate quasi illum hic eligendi fugiat, sapiente, repellat inventore consequatur maxime. Reprehenderit eligendi quos nobis nulla? Animi consectetur officia, magni aliquid vel labore ipsum dolorem dignissimos asperiores saepe.
    Consequatur quo ex accusamus cumque fuga autem neque expedita dicta veniam recusandae, quaerat labore consectetur molestias quidem, quisquam iure. Praesentium soluta delectus sapiente nisi mollitia dolore iste in adipisci ipsa.
    Odio ad itaque, error fugiat repellendus harum esse accusamus deserunt omnis voluptates, expedita aspernatur laboriosam incidunt optio eaque explicabo cumque! Officiis assumenda, ipsam dolor minima deleniti eveniet neque praesentium totam?
    Commodi saepe, distinctio qui rerum consectetur nam cum laudantium cupiditate repellendus, harum alias est sed eligendi ipsa expedita pariatur repudiandae magni autem ea esse obcaecati ab numquam nihil ipsum. Temporibus!
    Ipsum tempora temporibus molestias ipsa eos repellendus consectetur excepturi neque maiores ut expedita officiis id repudiandae, eius officia error alias accusantium possimus consequatur obcaecati adipisci aspernatur. Doloribus ipsum quae laudantium?
    Dolore tempore ex id! Non labore distinctio hic nobis ullam deserunt cum, ipsum consectetur amet inventore ducimus quisquam eligendi est doloribus! Esse ipsum nisi distinctio sapiente eligendi dicta, saepe provident.
    Ratione quod commodi voluptates aliquid quia impedit, debitis doloribus rem suscipit quis nam minima error cupiditate accusantium numquam recusandae! Doloremque maxime sed sunt, perspiciatis fuga dolores laudantium et a iste!
    Omnis quasi veritatis reiciendis quae quidem est nostrum recusandae esse distinctio blanditiis porro, eveniet repellat fugiat aliquam mollitia odit consequatur totam? Dignissimos, explicabo odio rerum perspiciatis et odit itaque commodi.
    Iure odit ipsa iste tempora neque, odio enim distinctio ex non, sint laboriosam, maxime natus repellendus. Tempore, optio explicabo iste, unde magni reiciendis odio illo laudantium eius nam quis ea.
    Tempore ex deleniti debitis ipsa illum odio veniam assumenda, eaque recusandae voluptatum corrupti consectetur aspernatur iure mollitia illo quos. Culpa id dolor quae dicta recusandae ipsam accusantium dignissimos repudiandae corrupti!
    Iste, voluptates nulla exercitationem, officiis mollitia sit non ad quidem doloribus et architecto ut laudantium iure libero tempore? Odio velit distinctio ducimus qui neque obcaecati modi culpa ex nisi ut!
    Consequatur, exercitationem nesciunt quisquam iste aliquam fuga! Voluptatibus est nesciunt maiores? Alias iste dolores minima illum vitae rerum odio sequi in, voluptates quaerat voluptas delectus, vel hic tenetur ut repellendus?
    Optio ducimus minima sapiente, laboriosam est adipisci impedit cum, nam accusantium, at reiciendis. Quod debitis officiis modi officia. Ratione cumque quas recusandae animi atque aspernatur repellendus minima quidem repellat. Quod!
    Similique consectetur officia quam dicta magni! Officiis dolores tenetur repudiandae facilis, ut cum nemo, accusamus reiciendis nam recusandae odit voluptatem aliquam voluptates odio, id modi sunt. Sit ab laborum at!
    Voluptatum voluptas et iste cupiditate perspiciatis explicabo voluptates vel! Dicta consequatur hic minus dolor porro cum, optio provident qui, distinctio quod eaque vel deserunt? Possimus doloremque molestias fugit sed sequi.
    Officiis odit esse hic rem? Rem impedit optio quis officiis quam, nam quisquam in velit culpa nemo similique nesciunt dolore laborum ullam distinctio eos. Quia aspernatur vitae amet. Incidunt, facere.
    Nihil qui perferendis quis molestiae sint accusamus, cum distinctio laboriosam delectus inventore. Sunt ratione minus itaque expedita, reiciendis eum quae dolore et porro distinctio sit nemo. Odio corrupti eligendi est.
    Adipisci odio magni, aliquam illo, voluptatem repellendus in quam tempora, quidem minus libero. Fugit, consequuntur? Ipsam quidem obcaecati dolorem illum blanditiis architecto voluptate, ut, eum error quibusdam officia recusandae sit.
    Deleniti fuga sit facere, dolores debitis consequuntur quas laudantium animi odit provident labore dicta ad nihil adipisci consequatur assumenda iusto in sed id nostrum eveniet nesciunt quos aliquam quibusdam. Omnis.
    Debitis, molestiae eos quibusdam tenetur praesentium quisquam beatae necessitatibus doloremque possimus. Quis corporis tempora cupiditate deserunt consequatur. Voluptate ullam repellendus ex error accusantium, ipsam laudantium neque. Architecto inventore est quia?
    Quae, sunt molestias nam corrupti vel numquam amet ipsa iusto non, minus quasi, dolor omnis! Excepturi provident, voluptates quidem recusandae, vitae, cupiditate ipsum blanditiis ducimus quis quas praesentium iure doloribus.
    Modi quae labore numquam facere. Tempora incidunt soluta, numquam pariatur sed eos possimus inventore nobis omnis odio quod rerum rem repellat recusandae iusto magni quae reiciendis molestias excepturi. Commodi, suscipit.
    Vitae enim eaque rerum earum deserunt ipsa ab odit quibusdam fugiat, odio, aliquam recusandae! Nisi, necessitatibus dolorem, amet asperiores nostrum impedit est voluptates vel aliquid, minima harum cum officiis quo!
    Error iure reprehenderit nam. Vitae enim fuga aspernatur sequi, illum quas libero cupiditate veritatis dignissimos omnis, ipsam minima eveniet? Fugit earum voluptatem illo repellendus veniam quos tenetur ipsam id atque.
    Totam, veritatis! Quasi deserunt quas ea voluptate nisi exercitationem. Veritatis in consequuntur dolorem sit dolore eaque neque aperiam corporis perferendis nihil, error, ea praesentium soluta tenetur veniam nemo iure voluptatum!
    Laborum modi odit numquam temporibus assumenda beatae incidunt et quisquam inventore maxime eveniet, excepturi dolores sapiente nihil reiciendis dolorum quam pariatur voluptates architecto nobis quos quae iste enim iure! Totam!
    Et ab nesciunt sit voluptates saepe quia, facilis quisquam ad autem cupiditate recusandae? Culpa dolorum pariatur molestias, optio nobis ipsam maiores aliquid quia quasi odio distinctio et fugiat. Ipsa, eum!
    Laudantium officia cumque iure nihil, accusantium officiis obcaecati, dolore, voluptas cum doloremque quisquam ad sit. Aperiam error porro architecto magni non repellat! Magnam tempora assumenda perspiciatis iure, quae sint cum?</p>
   </section>

   <div className="flex justify-center mb-10">
    <button onClick={move} className="rounded-full bg-slate-900 px-6 py-3 text-white shadow hover:bg-slate-800 transition">Move to Top</button>
   </div>
   </div>
   </>
  )
}

export default Scrolling
