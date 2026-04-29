import comics from "../data/comics";
function Main() {
    return <main>
        <section className="background-main">

        </section>
        <div className="cards-container">
            <div className="wrapper">
                <div className="cards">
                    {comics.map(function (comic) {
                        return (
                            <div key={comic.id}>
                                <img src={comic.thumb} alt={comic.title} />
                                <h3>{comic.title}</h3>
                            </div>
                        );
                    })}
                </div>

            </div>

        </div>
    </main>
}
export default Main;