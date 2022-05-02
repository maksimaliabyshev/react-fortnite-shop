export function reducer(state, { type, payload }) {
    switch (type) {
        case 'SET_GOODS': {
            return {
                ...state,
                goods: payload || [],
                loading: false,
            };
        }
        case 'ADD_TO_CART': {
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.id === payload.id
            );
            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: Number(orderItem.quantity) + 1,
                        };
                    }
                    return orderItem;
                });
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.name,
            };
        }
        case 'REMOVE_FROM_CART': {
            return {
                ...state,
                order: state.order.filter((item) => item.id !== payload.id),
            };
        }

        case 'CLOSE_ALERT': {
            return {
                ...state,
                alertName: '',
            };
        }
        case 'INCREMENT_QUANTITY': {
            const newOrder = state.order.map((item) => {
                if (item.id === payload.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            });
            return {
                ...state,
                order: newOrder,
            };
        }
        case 'DECREMENT_QUANTITY': {
            const newOrder = state.order.map((item) => {
                if (item.id === payload.id && item.quantity > 0) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    };
                }
                return item;
            });
            return {
                ...state,
                order: newOrder,
            };
        }
        case 'TOGGLE_CART': {
            return {
                ...state,
                isCartShow: !state.isCartShow,
            };
        }
        default:
            return state;
    }
}
