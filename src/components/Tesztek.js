export default function Tesztek() {
    return (
        <>
            <div>
                <h3>A papírt milyen színű szelektív kukába gyűjtjük?</h3>
                <div className="valaszok">
                    <button className="helyes">kék</button>
                    <button>piros</button>
                    <button>szürke</button>
                    <button>sárga</button>
                </div>
            </div>

            <div>
                <h3>Melyek komposztálhatóak?</h3>
                <div className="valaszok">
                    <button className="helyes">zöldség-gyümölcs maradék, tojáshéj</button>
                    <button>nagy ágak, fatörzsek, diófalevél</button>
                    <button>fém, műanyag, vegyszeres dolgok</button>
                    <button>ruhanemű, törlőruha, egyéb textil</button>
                </div>
            </div>

            <div>
                <h3>Fogmosásnál...</h3>
                <div className="valaszok">
                    <button className="helyes">elzárom a csapot, amikor épp a fogamat sikálom és nem kell víz</button>
                    <button>nem zárom el a csapot amíg a fogamat mosom, hogy lemossa a lehulló fogkrémhabot a mosdókagylóból</button>
                    <button>kitekerem a csapot teljesen, mert miért ne</button>
                    <button>csak akkor zárom el a csapot, amikor végeztem a fogmosással</button>
                </div>
            </div>
        </>
    )
}