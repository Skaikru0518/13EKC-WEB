import React from 'react'
import './Welcome.css'

function Welcome() {
    return (
        <div id='welcome'>
            <h2>Üdvözöljük a kirándulások világában!</h2>
            <div id='welcome-szovegek'>
                <p>
                    Cégünk a természet szerelmeseinek kínál felejthetetlen kirándulásokat és túrákat, amelyek során felfedezheti a világ legszebb tájait, élvezheti a friss levegőt, és egyedülálló élményekkel gazdagodhat. Legyen szó hegyi túrákról, erdei sétákról, vagy akár egy hosszabb, több napos expedícióról, mi biztosítjuk, hogy minden pillanata izgalmas és pihentető legyen. Kiemelt figyelmet fordítunk a túrák biztonságára, a környezetvédelemre, és arra, hogy minden résztvevő a saját tempójában élvezhesse a természet adta lehetőségeket.
                </p>
                <p>
                    Túráinkon minden korosztály és tapasztalati szint számára kínálunk programokat, legyen szó családi kirándulásról, baráti társaságoknak szóló kalandról, vagy egyéni felfedezőutakról. Csapatunk szakértő túravezetők és természetvédelmi szakemberek segítségével biztosítja, hogy minden kirándulás nemcsak élménydús, hanem tanulságos is legyen. Mi a természet szeretetének, a közösségi élményeknek és az aktív pihenésnek a legjobb kombinációját kínáljuk, hogy egy-egy kirándulás után feltöltődve, friss energiákkal térjen haza. Készüljön fel arra, hogy új barátokra talál, miközben felfedezi a természet csodáit!
                </p>
            </div>
            <hr id='welcome-line' />
        </div>
    )
}

export default Welcome