//firebase.js
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APP_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DB_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
}

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig)

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore()

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore }
