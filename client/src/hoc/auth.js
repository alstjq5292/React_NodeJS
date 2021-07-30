import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action'

export default function AuthenticationCheck(props, SpecificComponent, option, adminRoute = null) {

    // null => 아무나 출입이 가능한 페이지
    // true => 로그인한 유저만 출입이 가능한 페이지
    // false => 로그인한 유저는 출입 불가능한 페이지
    // adminRoute => 어드민 계정 = null, null 이 기본값으로 선정

        const dispatch = useDispatch();

        useEffect(() => {
            
            dispatch(auth()).then(response => {
                console.log(response)

                if(!response.payload.isAuth) {
                    if(option) {
                        props.history.push('/login')
                    }

                } else {
                    // 로그인 한 상태
                    if(adminRoute && !response.payload.isAdmin) {
                        props.history.push('/')
                    } else {
                        props.history.push('/')
                    }

                }

            })

        }, [])

        return (
            <SpecificComponent />
        )
    }