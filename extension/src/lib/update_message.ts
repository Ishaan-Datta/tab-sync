// request_type = push_new_data
// {
// 	changes: [
// 		{
// 			object_type:
// 			tab_id/group_id
// 			field
// 			new_value: either single value or nested dict with object fields
// 			operation
// 		}
// 	]
// }

// add functions that take args for every possible message operation you could have

// have a function for requesting updates

// wrap this in another set of functions for more abstract UI changes - delete all in a tab group would spam
// a bunch of delete tabs messages, then a delete group messagea after

// for request_type = pull_new_data or push_new_data
// pull new data: send last_updated_time
// update the last updated time after server responds w/ acknowledge or new tabs
// check response code to see if need to add into local storage failed things...

// sned update and wait for acknowledgement of successful addition by server before continuing -> add changes to queue anyways

// when you first hit connection, send your last updated time and pull the list of operations before you do anything else
