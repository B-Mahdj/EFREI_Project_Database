function addPersonne() {

    return (



        <div class="flex justify-center items-center my-10">
            <div class="flex flex-col max-w-lg px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                    Créer une visite
                </div>
                <div class="p-6">
                    <form action="#">
                        <div class="flex flex-col mb-2">
                        <select class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Type">
                                <option disabled selected>Visiteur</option>
                                <option>Maison</option>
                                <option>Appartement</option>
                            </select>
                        </div>
                        <div class="flex flex-col mb-2">
                        <select class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Type">
                                <option disabled selected>Bien</option>
                                <option>Maison</option>
                                <option>Appartement</option>
                            </select>
                        </div>
                        <div class="flex flex-col mb-2">
                            <div class="relative">
                                <input type="date" id="create-account-first-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="Nom du propriétaire" placeholder="Nom du visiteur" />
                            </div>
                        </div>


                        <div class="flex w-full my-4">
                            <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Ajouter
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    );


}

export default addPersonne;