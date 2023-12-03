import {useForm} from "react-hook-form";


function ContactForm() {
    function handleFormSubmit(data) {
        console.log(data)
    }
    const {register, handleSubmit} = useForm()
    return (
        <form id="contactForm" onSubmit={handleSubmit(handleFormSubmit)} className="contactForm">
            <label>
                Voornaam:
                <input type="text" {...register("firstName")}/>
            </label>
            <label>
                Achternaam:
                <input type="text"{...register("lastName")}/>
            </label>
            <label>
                Leeftijd:
                <input type="number"{...register("age")}/>
            </label>
            <label>
                Postcode:
                <input type="text" {...register("zipCode")}/>
            </label>
            <label>
                Bezorgfrequentie:
                <select {...register("delivery")}>
                    <option value="iedere_week">iedere week</option>
                    <option value="om_de_week">om de week</option>
                    <option value="iedere_maand">iedere maand</option>
                </select>
            </label>
            <label>
                <input type="radio" name="day" {...register("delivery-time")} placeholder="day"/>Overdag
                <input type="radio" name="evening" {...register("delivery-time")} placeholder="evening"/>s Avonds
            </label>
            <label>
                Opmerkingen:
                <textarea rows="4" cols="40" {...register("comments")}/>
            </label>
            <label>
                <input type="checkbox" placeholder="terms_of_agreement"/>Ik ga akkoord met de voorwaarden
            </label>
            <label
                {...register("Aardbei")}>
                {}
            </label>
            <button type="submit" >
                Verzend
            </button>
        </form>
    )
}
export default ContactForm