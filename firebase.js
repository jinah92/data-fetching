//firebase.js
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDGAaNvIBOpA2gfk9JIO-IPtwGLtwkkIPA',
  authDomain: 'nextjs-course-fe989.firebaseapp.com',
  databaseURL: 'https://nextjs-course-fe989-default-rtdb.firebaseio.com',
  projectId: 'nextjs-course-fe989',
  storageBucket: 'nextjs-course-fe989.appspot.com',
  messagingSenderId: '50321637603',
  appId: '1:50321637603:web:3f6b5f816d927d1c6f45d6'
}

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig)

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore()

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore }
