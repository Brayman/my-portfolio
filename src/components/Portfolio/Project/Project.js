import Card from "./Card";
import  "./Project.css"


function Project({projects}) {
    return (
        <section className="p-project__gallary">
            {projects.map(proj => <Card key={proj.title} data={proj}/>)}
        </section>
    )
}
export default Project;