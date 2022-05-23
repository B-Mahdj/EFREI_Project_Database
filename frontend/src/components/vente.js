function vente() {

    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-10 mx-5">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Nom du propriétaire
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Adresse
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Comission                        
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            ...    </th>
                        <td class="px-6 py-4">
                            ...
                        </td>
                        <td class="px-6 py-4">
                            ...
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="/voir/Karim" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Voir</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            ...    </th>
                        <td class="px-6 py-4">
                            ...
                        </td>
                        <td class="px-6 py-4">
                            ...    </td>
                        <td class="px-6 py-4 text-right">
                            <a href="/voir/Ary" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Voir</a>
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            ...    </th>
                        <td class="px-6 py-4">
                            ...
                        </td>
                        <td class="px-6 py-4">
                            ...
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="/voir/bilal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Voir</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );


}

export default vente;