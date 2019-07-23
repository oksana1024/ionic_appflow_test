import { Component } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  truestedPersonForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("")
  });
  records: any;
  recordId: any = null;

  constructor(public firestore: AngularFirestore) {
    // 2: subscribe to observable
    this.getRecords().subscribe(
      data =>
        (this.records = data.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as any;
        }))
    );
  }

  // 1: create Observable
  getRecords() {
    return this.firestore.collection("colA").snapshotChanges();
  }

  onSubmit() {
    if (this.recordId) {
      this.firestore
        .collection("colA")
        .doc(this.recordId)
        .update(this.truestedPersonForm.value);
      this.recordId = null;
    } else {
      this.firestore.collection("colA").add(this.truestedPersonForm.value);
    }
    this.truestedPersonForm.reset();
  }

  updateData(data, recordId) {
    this.recordId = recordId;
    this.truestedPersonForm.patchValue(data);
  }

  delete(id) {
    this.firestore
      .collection("colA")
      .doc(id)
      .delete();
  }
}
