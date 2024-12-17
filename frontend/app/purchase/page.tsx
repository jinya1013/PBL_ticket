'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { dayOfWeek, defaultStationNames, formatMonthDate, translations } from './lang';
type Language = 'en' | 'ja' | 'zh' | 'ko';

export default function PurchasePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const language = (searchParams?.get('lang') as Language) || 'ja';
  const [isEditingPassengers, setIsEditingPassengers] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [isEditingDateTime, setIsEditingDateTime] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDeparture, setIsDeparture] = useState(true);
  const [fromStation, setFromStation] = useState(defaultStationNames[language]);
  const [toStation, setToStation] = useState('');
  const [isEditingFrom, setIsEditingFrom] = useState(false);
  const [isEditingTo, setIsEditingTo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showFromStationModal, setShowFromStationModal] = useState(false);
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [fareDetails, setFareDetails] = useState<any>(null);
  const [isLoadingFare, setIsLoadingFare] = useState(false);

  const t = translations[language];

  const fetchFareDetails = async () => {
  if (!fromStation || !toStation) return;
  
  setIsLoadingFare(true);
  try {
    const res = await fetch(`/api/route/payment?from=${encodeURIComponent(fromStation)}&to=${encodeURIComponent(toStation)}&adults=${adults}&children=${children}&isHiragana=false`);
    const data = await res.json();
    setFareDetails(data);
  } catch (error) {
    console.error(t.fareNotAvailable, error);
  } finally {
    setIsLoadingFare(false);
    }
  };  
  useEffect(() => {
    fetchFareDetails();
  }, [fromStation, toStation, adults, children]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const fetchSuggestions = async (query: string, isFrom: boolean) => {
      if (!query) {
        isFrom ? setFromSuggestions([]) : setToSuggestions([]);
        return;
      }
      try {
        const res = await fetch(`/api/stations/suggest?query=${query}&isHiragana=false`);
        const data = await res.json();
        isFrom ? setFromSuggestions(data) : setToSuggestions(data);
      } catch (error) {
        console.error('Failed to fetch suggestions:', error);
      }
    };

    if (isEditingFrom) {
      fetchSuggestions(fromStation, true);
    }
    if (isEditingTo) {
      fetchSuggestions(toStation, false);
    }
  }, [fromStation, toStation, isEditingFrom, isEditingTo]);

  const handleCancel = () => {
    setShowCancelConfirm(true);
  };

  const confirmCancel = () => {
    router.push('/');
  };

  const handleBack = () => {
    router.push('/');
  };

  const formatDate = (date: Date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayStr = dayOfWeek[language][date.getDay()];
    return `${formatMonthDate[language](month, day)} (${dayStr})`;
  };

  const swapStations = () => {
    const temp = fromStation;
    setFromStation(toStation);
    setToStation(temp);
  };

  const handleStationSelect = (station: string, isFrom: boolean) => {
    if (isFrom) {
      setFromStation(station);
      setIsEditingFrom(false);
      setFromSuggestions([]);
    } else {
      setToStation(station);
      setIsEditingTo(false);
      setToSuggestions([]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800">
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl">
            <span className="text-white">{t.sectionTitle}</span>
            <span className="text-yellow-300">{t.sectionSubtitle}</span>
          </h1>
          <button className="bg-gray-700 text-white rounded-lg px-4 py-2">
            {t.inputContent}
          </button>
        </div>
        <p className="text-red-500 text-sm mb-4">{t.timeNote}</p>

        <div className="bg-white rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div>
                <div>{t.departureStation}</div>
                <button 
                  className="bg-gray-800 text-white px-4 py-2 rounded"
                  onClick={swapStations}
                >{t.swapStations}</button>
                <div>{t.arrivalStation}</div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative">
                  {isEditingFrom ? (
                    <>
                      <input
                        type={isMobile ? "text" : "search"}
                        value={fromStation}
                        onChange={(e) => setFromStation(e.target.value)}
                        className="border rounded px-2 py-1"
                        placeholder={t.departureStationPlaceholder}
                      />
                      {fromSuggestions.length > 0 && (
                        <div className="absolute z-10 w-full bg-white border rounded mt-1 max-h-48 overflow-y-auto">
                          {fromSuggestions.map((suggestion: any, index: number) => (
                            <div
                              key={index}
                              className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                              onClick={() => handleStationSelect(suggestion.station_name, true)}
                            >
                              {suggestion.station_name}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div 
                      className="text-green-700 text-xl cursor-pointer"
                      onClick={() => setIsEditingFrom(true)}
                    >
                      {fromStation || t.selectDepartureStation}
                    </div>
                  )}
                </div>
                <div className="relative">
                  {isEditingTo ? (
                    <>
                      <input
                        type={isMobile ? "text" : "search"}
                        value={toStation}
                        onChange={(e) => setToStation(e.target.value)}
                        className="border rounded px-2 py-1"
                        placeholder={t.arrivalStationPlaceholder}
                      />
                      {toSuggestions.length > 0 && (
                        <div className="absolute z-10 w-full bg-white border rounded mt-1 max-h-48 overflow-y-auto">
                          {toSuggestions.map((suggestion: any, index: number) => (
                            <div
                              key={index}
                              className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                              onClick={() => handleStationSelect(suggestion.station_name, false)}
                            >
                              {suggestion.station_name}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div 
                      className="text-blue-600 text-xl cursor-pointer"
                      onClick={() => setIsEditingTo(true)}
                    >
                      {toStation || t.selectArrivalStation}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <button 
                className="bg-gray-700 text-white px-6 py-2 rounded"
                onClick={() => setShowFromStationModal(true)}
              >
                {t.change}
              </button>
              <button 
                className="bg-blue-600 text-white px-6 py-2 rounded"
                onClick={() => setIsEditingTo(true)}
              >
                {t.input}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span>{t.dateTime}</span>
              {!isEditingDateTime ? (
                <div>
                  <span className="text-green-700">{t.today}</span>
                  <div className="text-green-700 text-xl">{formatDate(selectedDate)}</div>
                </div>
              ) : (
                <div>
                  <input 
                    type="date" 
                    value={selectedDate.toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(new Date(e.target.value))}
                    className="border rounded px-2 py-1"
                  />
                </div>
              )}
            </div>
            <button 
              className="bg-gray-700 text-white px-6 py-2 rounded"
              onClick={() => setIsEditingDateTime(!isEditingDateTime)}
            >
              {isEditingDateTime ? t.confirm : t.change}
            </button>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div>
              <button 
                className={`border px-2 mr-2 ${isDeparture ? 'border-green-700 text-green-700' : 'border-gray-400 text-gray-400'}`}
                onClick={() => setIsDeparture(true)}
              >
                {t.departure}
              </button>
              <button 
                className={`border px-2 ${!isDeparture ? 'border-green-700 text-green-700' : 'border-gray-400 text-gray-400'}`}
                onClick={() => setIsDeparture(false)}
              >
                {t.arrival}
              </button>
            </div>
            <button className="bg-gray-700 text-white px-6 py-2 rounded">{t.change}</button>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span>{t.passengers}</span>
              {!isEditingPassengers ? (
                <div>
                  <span className="text-green-700 text-xl">{adults}{t.person}</span>
                  <span className="text-gray-400 ml-4">{children}{t.person}</span>
                </div>
              ) : (
                <div className="flex gap-8">
                  <div className="flex items-center gap-2">
                    <span>{t.adults}</span>
                    <button 
                      className="bg-gray-200 px-3 py-1 rounded"
                      onClick={() => setAdults(Math.max(0, adults - 1))}
                    >-</button>
                    <span className="mx-2">{adults}</span>
                    <button 
                      className="bg-gray-200 px-3 py-1 rounded"
                      onClick={() => setAdults(adults + 1)}
                    >+</button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{t.children}</span>
                    <button 
                      className="bg-gray-200 px-3 py-1 rounded"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                    >-</button>
                    <span className="mx-2">{children}</span>
                    <button 
                      className="bg-gray-200 px-3 py-1 rounded"
                      onClick={() => setChildren(children + 1)}
                    >+</button>
                  </div>
                </div>
              )}
            </div>
            <button 
              className="bg-gray-700 text-white px-6 py-2 rounded"
              onClick={() => setIsEditingPassengers(!isEditingPassengers)}
            >
              {isEditingPassengers ? t.confirm : t.change}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <span>{t.fare}</span>
            <div>
              {isLoadingFare ? (
                <div className="text-gray-500">{t.calculating}</div>
              ) : fareDetails ? (
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-700">
                    ¥{fareDetails.get_payment?.toLocaleString()}
                  </div>
                  {(adults > 0 || children > 0) && (
                    <div className="text-sm text-gray-600">
                      {adults > 0 && `${t.adults} × ${adults}`}
                      {children > 0 && ` / ${t.children} × ${children}`}
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-gray-500">{t.fareNotAvailable}</div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-4">
            <button 
              className="bg-red-600 text-white rounded-full w-16 h-16"
              onClick={handleCancel}
            >
              {t.cancel}
            </button>
            <button 
              className="bg-orange-600 text-white px-6 py-2 rounded"
              onClick={handleBack}
            >
              {t.back}
            </button>
            <button className="bg-black text-white px-6 py-2 rounded">{t.monochrome}</button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-300">{t.confirmation}</span>
            <button className="bg-green-500 text-white px-8 py-2 rounded">{t.confirmButton}</button>
          </div>
        </div>
      </div>

      {showCancelConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <p className="text-xl mb-4">{t.cancelConfirmation}</p>
            <div className="flex justify-center gap-4">
              <button 
                className="bg-gray-500 text-white px-6 py-2 rounded"
                onClick={() => setShowCancelConfirm(false)}
              >
                {t.no}
              </button>
              <button 
                className="bg-red-600 text-white px-6 py-2 rounded"
                onClick={confirmCancel}
              >
                {t.yes}
              </button>
            </div>
          </div>
        </div>
      )}

      {showFromStationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-xl mb-4">{t.selectDepartureStationModalTitle}</h3>
            <input
              type="text"
              value={fromStation}
              onChange={(e) => setFromStation(e.target.value)}
              className="w-full border rounded px-2 py-1 mb-4"
              placeholder={t.stationNamePlaceholder}
            />
            <div className="flex justify-end gap-4">
              <button 
                className="bg-gray-500 text-white px-6 py-2 rounded"
                onClick={() => setShowFromStationModal(false)}
              >
                {t.cancelButton}
              </button>
              <button 
                className="bg-blue-600 text-white px-6 py-2 rounded"
                onClick={() => {
                  setShowFromStationModal(false);
                  setIsEditingFrom(false);
                }}
              >
                {t.confirmModalButton}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}