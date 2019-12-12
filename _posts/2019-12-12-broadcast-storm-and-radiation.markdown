---
layout: post.lay
title:  "broadcast storm and broadcast radiation."
date:   2019-12-12 20:24:00 +0100
categories: [blog,tecnica]
---

In una switched LAN ( = solo switch no router ..) i pacchetti di Broadcast possono rappresentare un problema.

### Cosa è un pacchetto di broadcast.

E' un pacchetto indirizzato a tutti gli host sulla subnet, che a livello 2 si traduce con mac del destinatario 
FF:FF:FF:FF:FF:FF (broadcast)

Gli switch propagano tali frame su tutte le porte.

###  Perchè si usano?

Sono utili quando un host deve chiedere o scoprire se sulla lan c'è un qualche servizio, ad esempio:

- c'è qualcuno che mi può dare un indirizzo ip con cui configurarmi,

- c'è qualcuno che ha una stampante che posso usare?..

- c'è qualcuno che ha una gomma da cancellare ? (ops! vale per gli studenti di una classe)

in genere i protocolli usati hanno sigla qualcosa-DS o DP (Discovery Service o Protocol..)

es: 
SDP,LLDP,MSDP,SLP ...

### Perchè possono dar noia?

perchè sono nati per facilitare le configurazioni 

es. se viene installata una stampante in un laboratorio non bisogna passare su ogni computer per configurare l'indirizzo dell'host (pc) che la condivide...

MA !  il prezzo da pagare è che se uno vuole usare una stampante condivisa lo chiede a tutta la rete! sarebbe come a dire che se ad un alunno serve una gomma da cancellare lo chiede a tutta la scuola! 
Le classi varie sarebbero continuamente interrotte da gente che chiede una volta una gomma una volta una penna ....

Su una lan si traduce con basse prestazioni della rete. 

In più un pacchetto verso/da internet potrebbe trovarsi ostacolato nel suo percorso da "inutili" frame di broadcast.. e invece noi vogliamo un internet veloce! Vero?

Wikipedia fa la differenza tra broadcast storm e broadcast radiation in base all'entità del fenomeno.

Radiation= tanto broadcast, rallenta la rete!!

Storm = troppo broadcast può piantare la rete!!!!
 
### La soluzione : 

 Frammentare la rete in domini di broadcast = usate switch layer £ (grezzamente parladno router che routano reti etherne-ethernet)

Se foste un insegnante permettereste che se ad un alunno serva una gomma da cancellare esca dall'aula per chiederla a tutti?
 
Seehh e che volete frammentare una rete di circa 200 pc in domini di broadcast?
perchè no? 

uno switch layer3 costa oramai quanto uno layer 2 ...

se proprio no, allora la lan deve essere ben configurata !!!

Ad esempio: i led associate alle port di un switch si illuminano al passaggio di un frame..
il comportamento normale dovrebbe essere:

[normal led](https://www.youtube.com/watch?v=BuzYB78cmcQ)

notate che a volte lampeggiano all'unisono (qualche frame di broadcast), ma la maggior parte del tempo lampeggiano in modo del tutto casuale e  asincrono: è assai improbabile che i pc collegati inviino frame nello stesso istante!

questo tizio invece è molto preoccupato di come lampeggiano i suoi switch ( che non saranno cisco ma sono comunque degli HP !)

[ABnormal led ](https://www.youtube.com/watch?v=cuXe_g22cto)

Broadcast ! 

oppure un altro problema pericoloso sulle reti switched :

## I LOOP !!!


[Qui](https://community.spiceworks.com/topic/377628-possible-broadcast-storm-or-dos)
 un uomo chiede aiuto ad una community di tecnici,
 
preoccupato del fatto che :
 
- *"..Every light on every single switch on our network was flashing in unison at a steady rate.."*

- *".. .So at this point I'm thinking could this be a DoS attack?..."*

- *".. we sent out a team of people to all the IT suites looking for a cable which may have been looped in two sockets by a pupil .."*

 
chi risponde, fornisce un protocollo di comportamento per verificare se vi sono loop.. 
e dice :

- *" Go to the most central of your switches then disconnect all uplinks to other switches ...If you do not know which ones are uplinks (bad IT person; BAD IT PERSON!)"*
  
  
BAD IT PERSON! *"cattivo Tecnico Informatico!"* 

una rete deve essere per strutturata sin dal livello 1 (cablaggio) 
in caso di emergenza dovrai sapere quale cavo scollegare!! No ?

Anche la gestione di un [piccolo rack](https://www.youtube.com/watch?v=BuzYB78cmcQ)
 ha le sue regole dell'arte i suoi protocolli e best practice ...

questi qui non le conoscono ...
![disastro](https://tr4.cbsistatic.com/hub/i/r/2015/02/27/e17a4475-42a3-408a-aa42-d52d203d8187/resize/770x/ff90301573d45432e44494710e48a8d4/24martinez.jpg)
  


P.S. : sebbene [spiceworks](https://www.spiceworks.com/) fornisca app per la gestione e monitoring di reti queste funzionano e risolvono se la rete è fatta bene!
Se butti ingredienti a caso in una pentola, in proporzioni a casaccio, 
nell'ordine che ti pare anche se indossi er sinale de masterchef, 
usi i cortelli ggiappponesi in ceramica affilita colla pietra 
del monte Fujujama aruzakai e tuo cugino ha fatto il corso da masterchef 
quello che ti esce fuori è 'na schifezza !!





   






 





