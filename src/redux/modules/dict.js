import {db} from "../../firebase";
import { doc, collection, getDoc, getDocs,
    addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

// Actions
const LOAD = 'dict/LOAD';
const CREATE = 'dict/CREATE';
const UPDATE = 'dict/UPDATE';
const DELETE = 'dict/DELETE';

const initialState = {
    list: []
};
export function loadDict(dict_list){
    return { type: LOAD, dict_list};
}

export function createDict(dict) {
    return { type: CREATE, dict };
}

export function updateDict(dict,index) {
    return { type: UPDATE, dict, index };
}

export function deleteDict(dict_index) {
    return { type: DELETE, dict_index};
}

//middlewares
export const loadDictFB = () => {
    return async function (dispatch) {
        const dict_data =await getDocs(collection(db, "dict"));

        let dict_list = [];

        dict_data.forEach((d) => {
            dict_list.push({id:d.id, ...d.data()});
        })
        dispatch(loadDict(dict_list));
    }
}

export const createDictFB = (dict) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "dict"), dict);
        const dict_data = {id: docRef.id, ...dict};

        dispatch(createDict(dict_data));
    }
}

export const updateDictFB = (dic,dict_id) => {
    return async function (dispatch, getState) {
        const docRef = doc(db, 'dict', dict_id);
        await updateDoc(docRef, {...dic});

        const _dict_list = getState().dict.list;
        const dict_index = _dict_list.findIndex((d) => {
            return d.id === dict_id;
        })
        dispatch(updateDict(dic,dict_index));
    }
}

export const deleteDictFB = (dict_id) => {
    return async function (dispatch, getState) {
        if(!dict_id){
            window.alert("아이디가 없네요!");
            return;
        }
        const docRef = doc(db, "dict", dict_id);
        await deleteDoc(docRef);

        const _dict_list = getState().dict.list;
        const dict_index = _dict_list.findIndex((d) => {
            return d.id === dict_id;
        })
        dispatch(deleteDict(dict_index));
    }
}


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "dict/LOAD": {
            return {list: action.dict_list};
        }
        case "dict/CREATE": {
            const new_dict_list = [...state.list, action.dict]
            return { list: new_dict_list };
        }

        case "dict/UPDATE": {
            const new_dict_list = state.list
            new_dict_list.splice(action.index,1,action.dict)

            return {list: new_dict_list};
        }

        case "dict/DELETE": {
            const new_dict_list = state.list.filter((l, idx) => {
                return action.dict_index !== idx;
            })
            return {list: new_dict_list};
        }
        default: return state;
    }
}