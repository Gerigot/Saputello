
const frase_a= ["L'utenza potenziale ","Il bisogno emergente ","Il quadro normativo ","L'attuale ottimizzazione ","La nuova organizzazione ","L'approccio programmatico ","Il contesto motivazionale ","Il criterio metodologico ","Il modello di sviluppo ", "Il metodo partecipativo "]
const frase_b = ["si caratterizza per ", "privilegia ", "prefigura ", "riconduce a sintesi ", "persegue ", "estrinseca ", "si propone ", "presuppone ", "porta avanti ","auspica "]
const frase_c = ["il ribaltamento della logica preesistente ","il superamento di ogni ostacolo e/o resistenza ","un organico collegamento interdisciplinare ed una prassi di lavoro di gruppo ","la puntuale corrispondenza fra obiettivi e risorse ","la verifica critica degli obiettivi istituzionali e l'individuazione di fini quantitativi ","il riorientamento delle linee di tendenza in atto ","l'accorpamento delle funzioni ed il decentramento decisionale ","la ricognizione del bisogno emergente e della domanda non soddisfatta ","la riconversione ed articolazione periferica dei servizi ","un corretto rapporto fra strutture e sovrastrutture "]
const frase_d = ["nel primario interesse di tutti, ","senza pregiudicare l'attuale livello delle prestazioni, ","al di sopra di interessi e pressioni di parte, ","secondo un modulo di interdipendenza orizzontale, ","in una visione organica e ricondotta ad unità, ","con criteri non dirigistici, ","al di là delle contraddizioni e difficoltà iniziali, ","in maniera articolata e non totalizzante, ","attraverso meccanismi di coinvolgimento, ","senza precostituzione delle risposte, "]
const frase_e = ["sostanziando e vitalizzando ","recuperando ovvero rivalutando ","ipotizzando e perseguendo ","non assumendo mai come implicito ","fattuizzando e concretizzando ","non sottacendo ma anzi puntualizzando ","petenziando ed incrementando ","non dando certo per scontato ","evidenziando ed esplicitando ","attivando ed implementando "]
const frase_f = ["nei tempi brevi, anzi brevissimi ","in un'ottica preventiva e non ex-post ","in un ambito territoriale omogeneo, a livelli diversi ","nel rispetto della normativa vigente ","nel contesto di un sistema integrato ","quale sua premessa indispensabile e condizionante ","nella misura in cui ciò sia fattibile ","con le dovute ed imprescindibili sottolineature ","in termini di efficacia ed efficienza ","a monte ed a valle della situazione contingente "]
const frase_g = ["la trasparenza di ogni atto decisionale", "la non classificazione delle risposte","una congrua flessibilità delle strutture","l'annullamento di ogni ghettizzazione", "il coinvolgimento attivo di operatori ed utenti","l'appianamento delle discrepanze e discrasie esistenti","la ridefinizione di una nuova figura professionale", "l'adozione di una metodologia differenziata", "la debucratizzazione del linguaggio", "un indispensabile salto di qualità"]

const generateRandom = (number) => {
    return Math.floor(Math.random() * number)
}

const getRandomArrayElement = (array)=>{
    const randomNumber = generateRandom(array.length);
    return array[randomNumber] 
}

const getFrase = () =>{
    return (getRandomArrayElement(frase_a) + getRandomArrayElement(frase_b) + getRandomArrayElement(frase_c) + getRandomArrayElement(frase_d) + getRandomArrayElement(frase_e) + getRandomArrayElement(frase_f) + getRandomArrayElement(frase_g))
} 

export default getFrase;