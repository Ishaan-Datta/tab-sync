// discard invalid ops, like if server says deleted group 3, you remove all operations related to group 3 like moving tabs

// only make changes that wont conflict

// make a debg tab for staing discarded operaetions w/ data dumps and statement for logic ondition filled to come for the drop

// maybe add orphan group with tab with teh updated tab data so you can easily restore if the server didnt handle the conflict the way you wanted
// would mostly be for deletions?

// when conflicts are handled automaticlaly , should make a quick notifcitaion or counter tick so the user is aware and can check (red dot on the bell icon)

// when adding/dragging from the orphan conflict window, should make create events? or update?

// first step is basically for each operation you receive from the server, if any of the current local changes have the same UUID, you know that it is conflicting

// then need to look at operation specifically? -> server takes precedance

// basically if you have any operations in pending queue with same UUID as the server, you make notification, discard and add to the orphan queue
// creates arent going to have same UUID guaranteed - so if server says update and you said delete, you will create a new tab with those updated params, if server says update and you said update, you will just apply
