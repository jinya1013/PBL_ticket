'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PurchasePage() {
  const router = useRouter();
  const [isEditingPassengers, setIsEditingPassengers] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [isEditingDateTime, setIsEditingDateTime] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDeparture, setIsDeparture] = useState(true);

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
    const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()];
    return `${month}月${day}日 (${dayOfWeek})`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800">
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl">
            <span className="text-white">ご利用になる</span>
            <span className="text-yellow-300">区間・日時・人数</span>
            <span className="text-white">を</span>
          </h1>
          <button className="bg-gray-700 text-white rounded-lg px-4 py-2">
            ここまでの入力内容
          </button>
        </div>
        <h2 className="text-white mb-4">お選びください</h2>
        <p className="text-red-500 text-sm mb-4">所要時間が短い組み合わせを優先してご案内します。</p>

        <div className="bg-white rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div>
                <div>出発駅</div>
                <button className="bg-gray-800 text-white px-4 py-2 rounded">↑入れ替え↓</button>
                <div>到着駅</div>
              </div>
              <div className="text-green-700 text-xl">高崎</div>
            </div>
            <button className="bg-gray-700 text-white px-6 py-2 rounded">変 更</button>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-blue-600 text-xl">到着駅を指定してください</div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded">入 力</button>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span>利用日時</span>
              {!isEditingDateTime ? (
                <div>
                  <span className="text-green-700">(本日)</span>
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
              {isEditingDateTime ? '確定' : '変 更'}
            </button>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div>
              <button 
                className={`border px-2 mr-2 ${isDeparture ? 'border-green-700 text-green-700' : 'border-gray-400 text-gray-400'}`}
                onClick={() => setIsDeparture(true)}
              >
                出発
              </button>
              <button 
                className={`border px-2 ${!isDeparture ? 'border-green-700 text-green-700' : 'border-gray-400 text-gray-400'}`}
                onClick={() => setIsDeparture(false)}
              >
                到着
              </button>
            </div>
            <button className="bg-gray-700 text-white px-6 py-2 rounded">変 更</button>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span>人数</span>
              {!isEditingPassengers ? (
                <div>
                  <span className="text-green-700 text-xl">大人 {adults}人</span>
                  <span className="text-gray-400 ml-4">こども {children}人</span>
                </div>
              ) : (
                <div className="flex gap-8">
                  <div className="flex items-center gap-2">
                    <span>大人</span>
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
                    <span>こども</span>
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
              {isEditingPassengers ? '確定' : '変 更'}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span>条件</span>
              <div>
                <div>
                  <span className="text-blue-600">新幹線を</span>
                  <span className="text-red-600">利用する</span>
                </div>
              </div>
            </div>
            <button className="bg-gray-700 text-white px-6 py-2 rounded">変 更</button>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div>
              <span>経由駅</span>
              <span className="text-red-600 ml-4">指定なし</span>
            </div>
            <button className="bg-gray-700 text-white px-6 py-2 rounded">変 更</button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-4">
            <button 
              className="bg-red-600 text-white rounded-full w-16 h-16"
              onClick={handleCancel}
            >取消</button>
            <button 
              className="bg-orange-600 text-white px-6 py-2 rounded"
              onClick={handleBack}
            >前画面に戻る</button>
            <button className="bg-black text-white px-6 py-2 rounded">白黒表示</button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-300">よろしければ</span>
            <button className="bg-green-500 text-white px-8 py-2 rounded">検 索</button>
          </div>
        </div>
      </div>

      {showCancelConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <p className="text-xl mb-4">入力内容を取り消しますか？</p>
            <div className="flex justify-center gap-4">
              <button 
                className="bg-gray-500 text-white px-6 py-2 rounded"
                onClick={() => setShowCancelConfirm(false)}
              >
                いいえ
              </button>
              <button 
                className="bg-red-600 text-white px-6 py-2 rounded"
                onClick={confirmCancel}
              >
                はい
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}