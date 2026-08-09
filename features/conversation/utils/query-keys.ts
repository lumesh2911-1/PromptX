export const queryKeys ={ 
    conversations:{
        all:["conversations"] as const,
        detail:(id: string) => ["conversations", id ] as const,

    },
    message:{
        byConversation:(conversationId: string)=>
        ["messages", conversationId] as const,
    }
}