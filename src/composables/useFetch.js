import { toRefs, ref, reactive } from "vue";
export function useFetch(url){
    const data = ref (null)
    const state = reactive({
        error: null,
        loading: false,
    })

    const fetchData = async () => {
        state.loading = true;
        try{
            const response = await fetch(url);
            data.value = await response.json();
        }
        catch(e) {
            state.error = e;
        }
        finally{
            state.loading = false;
        }
    };
    fetchData();
    return {data, ...toRefs(state)};
}