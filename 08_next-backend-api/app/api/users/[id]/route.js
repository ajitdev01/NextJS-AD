export async function GET(request, {params}) {
    const {id} = await params;
    console.log(id);
    return Response.json(
        {
            "id": id,
            "name": "Aarav Sharma",
            "email": "aarav.sharma1@example.com",
            "phone": "+91-7001122334",
            "address": "12 Bihari Lane, Rajendra Nagar, Patna, Bihar 800016"
        })
}