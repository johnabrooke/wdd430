import { Routes, RouterModule } from "@angular/router";
import { DocumentsComponent } from "./documents/documents.component";
import { MessageListComponent } from "./messages/message-list/message-list.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { NgModule } from "@angular/core";
import { DocumentDetailComponent } from "./documents/document-detail/document-detail.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/documents', pathMatch: 'full' },
    { path: 'documents', component: DocumentsComponent, children:[
        { path: ':id', component: DocumentDetailComponent }, 
    ] },
    { path: 'messages', component: MessageListComponent },
    { path: 'contacts', component: ContactsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}