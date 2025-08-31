const inputNomeEvento = document.getElementById('inputNomeEvento')
const inputDataEvento = document.getElementById('inputDataEvento')
const inputHorarioEvento = document.getElementById('inputHorario')
const inputLocal = document.getElementById('inputLocal')
const inputDescricao = document.getElementById('inputDescricao')
const eventForm = document.getElementById('eventForm')

const eventsContainer = document.getElementById("eventsContainer")

const getEvents = () => JSON.parse(localStorage.getItem("events")) ?? [];
const saveEvents = (events) => localStorage.setItem("events",JSON.stringify(events));

function renderEvents()
{
    const events = getEvents()
    eventsContainer.innerHTML = ""

    if(events.length === 0)
    {
        eventsContainer.innerHTML = `<h3 class="mb-4">Você não tem mais eventos, registre um evento!</h3>`
        return
    }

    //Criando uma tabela para exibir os itens
    const table = document.createElement("table")
    table.className = "w-full text-left border-collapse"

    table.innerHTML = `
        <thead>
            <tr class="bg-orange-600 text-white">
                <th class="p-2 border">Nome</th>
                <th class="p-2 border">Data</th>
                <th class="p-2 border">Horário</th>
                <th class="p-2 border">Local</th>
                <th class="p-2 border">Descrição</th>
            </tr>
        </thead>
    `;

    const tbody = document.createElement("tbody")

    events.forEach(event => {
        const tr = document.createElement("tr");
        tr.className = "hover:bg-orange-100"
        tr.innerHTML = `
            <td class="p-2 border">${event.name}</td>
            <td class="p-2 border">${event.date}</td>
            <td class="p-2 border">${event.time}</td>
            <td class="p-2 border">${event.location}</td>
            <td class="p-2 border">${event.description}</td>
        `;
        tbody.appendChild(tr)
    });

    table.appendChild(tbody)
    eventsContainer.appendChild(table)

}

eventForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newEvent = {
        name: inputNomeEvento.value,
        date: inputDataEvento.value,
        time: inputHorarioEvento.value,
        location: inputLocal.value,
        description: inputDescricao.value
    };

    const events = getEvents();

    events.push(newEvent);
    saveEvents(events);

    alert("Evento Salvo com sucesso")
    eventForm.reset()
    renderEvents()
    
})

renderEvents()


