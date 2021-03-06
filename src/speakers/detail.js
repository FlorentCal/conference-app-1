import detail from '../layout/speakerDetail.html'

export default class SpeakerDetails{
    constructor(talkService){
        this.talkService = talkService
    }

    render(idSpeaker){
        $('#main-view').html(detail)
        this.talkService.findObjectById('speakers', idSpeaker)
            .then(speaker => {
                $('#retour').html(`
                <a class="navbar-brand" href="#speakers-list">
                    <img  height="30" src="/src/images/retour.png"
                    alt="retour">
                </a>`
                )
                $('h1#title').append(`${speaker.lastname} ${speaker.firstname}`)
                $('#image').append(`<img class="round col-4 offset-4" src='/src/images/${speaker.image}' alt='Image presentateur'/>`)
                speaker.socials.forEach((social) => {
                    $('#speaker-socials').append(`<a class="list-group-item col-4 offset-4" href='${social.link}'>${social.class}</a>`)
                })
                $('#presentation').append(`<p class="text-justify">${speaker.about}</p>`)
            }).catch(exception => $('h1#title').append('Error while loading speaker : ' + exception))
    }
}