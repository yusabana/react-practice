React native native app Samples

- firebase は Auth と Firestore を利用

firestore のルール

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid}/memos/{memo} {
      allow read, write: if request.auth.uid == uid
    }
  }
}
```
