/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Axios from 'axios';

export default function Modal(props) {

  const [personneListe, setPersonneListe] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/personne/', {
    }).then((response) => {
      setPersonneListe(response.data);
    });
  }, []
  )

  const [bien, setBien] = useState("");

  useEffect(() => {
    Axios.get('http://localhost:3001/api/bien_immobilier/id', {
      params: {
        id: props.id
      }
    }).then((response) => {
      setBien(response.data);
    });
  }, []
  )
  var b = new Map();
  for (var key in bien[0]) {
    b.set(key, bien[0][key]);
  }


  const [bi, setB] = useState(props.id);
  const [proprio, setProprio] = useState(props.idprop);
  const [client, setClient] = useState("");
  const [date, setDate] = useState(new Date());
  const [comission, setComission] = useState(0);
  const [Dispo, setDispo] = useState(0);


  const vendreBien = () => {
    Axios.post('http://localhost:3001/api/transaction/', {
      bien: bi,
      proprio : proprio,
      client: client.split('.')[0],
      date : date,
      comission : parseInt(b.get('prix_vente')) * comission * 0.01
    }).then(() => {
      changeDispo();
    });
  };

  const changeDispo = () => {
    console.log("ok");
    Axios.put('http://localhost:3001/api/bien_immobilier/id', {
      id: bi,
      dispo : Dispo
    }).then(() => {
      console.log("success vente réalisée");

    });
  };


  const [open, setOpen] = useState(true)
  const cancelButtonRef = useRef(null)
  let button;

  const [openModalV, setOpenModalV] = useState(false);

  //check isVendu affichage du boutton vendre
  if (b.get('disponibilite')) {
    button = <button
      type="button"
      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
      onClick={() => setOpenModalV(true)}
      ref={cancelButtonRef}
    >
      Vendre
    </button>
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full lg:w-fit">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">

                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="w-full">
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                          <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Descriptif du bien {b.get('disponibilite') ? '' : '(VENDU)' }</h3>
                          </div>
                          <div className="border-t border-gray-200">
                            <dl>
                              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Nom du propriétaire</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"> {props.nom + " " + props.prenom}
                                </dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Adresse</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{b.get('adresse')}</dd>
                              </div>
                              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Type</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{b.get('type_bien')}</dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">État</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{b.get('etat')}</dd>
                              </div>
                              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Date de disponibilité</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{b.get('date_disponibilite')}</dd>
                              </div>
                              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Prix (€)</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{b.get('prix_vente')}</dd>
                              </div>
                              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Informations suplémentaire</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                  <ul role="list" className="border border-white rounded-md divide-y divide-gray-200">
                                    <li className="pr-4 py-3 flex items-center justify-between text-sm">
                                      <div className="w-0 flex-1 flex items-center">
                                        <span className="flex-1 w-0 truncate">Nb pièce :</span>
                                      </div>
                                      <div className="ml-4 flex-shrink-0">
                                        {b.get('nb_piece')}
                                      </div>
                                    </li>
                                    <li className="pr-4 py-3 flex items-center justify-between text-sm">
                                      <div className="w-0 flex-1 flex items-center">
                                        <span className="flex-1 w-0 truncate">Nb garage :</span>
                                      </div>
                                      <div className="ml-4 flex-shrink-0">
                                        {b.get('nb_garage')}
                                      </div>
                                    </li>
                                    <li className="pr-4 py-3 flex items-center justify-between text-sm">
                                      <div className="w-0 flex-1 flex items-center">
                                        <span className="flex-1 w-0 truncate">Superficie (m²) : </span>
                                      </div>
                                      <div className="ml-4 flex-shrink-0">
                                        {b.get('superficie')}
                                      </div>
                                    </li>
                                  </ul>
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">



                  {button}
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Fermer
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
        {openModalV &&

          <Dialog as="div" className="relative z-10" onClose={setOpen}>


            <div className="bg-gray-50 fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                <div class="flex justify-center items-center my-10">
                  <div class="flex flex-col max-w-lg px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                    <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                      Vente : {props.nom + " " + props.prenom}
                    </div>
                    <div class="p-6">
                      <form action="#">
                        <div class="flex flex-col mb-2">
                          <div class=" relative " >
                            <select class="rounded-lg border-transparent flex-2 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                              name="Client" onChange={(event) => {setClient(event.target.value);}}>
                              <option disabled selected>Client</option>
                              {personneListe.map((val, key) => {
                                return <option key={val.id_personne}>{val.id_personne + ". " + val.nom + " " + val.prenom}</option>
                              })}
                            </select>

                          </div>
                        </div>
                        <div class="flex flex-col mb-2">
                          <div class="relative">

                            <input type="date" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                              placeholder="Disponibilité" onChange={(event) => {setDate(event.target.value);}}/>

                          </div>
                        </div>


                        <div class="flex gap-2 mb-2">


                          <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z" clip-rule="evenodd" />
                              </svg>
                            </div>
                            <input type="number" min="0" name="price" disabled class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-10  pb-3"
                              placeholder="Prix" value= {b.get('prix_vente')}/>
                          </div>
                          <select class="rounded-lg border-transparent flex-2 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="Etat" onChange={(event) => {setComission(event.target.value);}}>
                            <option disabled selected>Commission (%) </option>
                            <option key="neuf">3</option>
                            <option key="bon_etat">5</option>
                          </select>

                        </div>
                        <div class="flex w-full my-4">
                          <button class="py-2 px-4 mx-2 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={vendreBien}>
                            Vendre
                          </button>
                          <button type="submit" class="py-2 px-4 mx-2 bg-blue-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                            onClick={() => setOpenModalV(false)}>
                            Fermer
                          </button>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>






              </div>
            </div>
          </Dialog>}
      </Dialog>
    </Transition.Root>
  )
}
