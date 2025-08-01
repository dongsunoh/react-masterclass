import styled from "styled-components";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {fetchCoins} from "../api";

const Container = styled.div`
    padding: 0 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: grid;
    justify-content: center;
    align-items: center;
`;

const CoinList = styled.ul`
    
`;

const Coin = styled.li`
    background-color: white;
    color: ${(props) => props.theme.bgColor};
    margin-bottom: 10px;
    border-radius: 15px;
    a {
        display: flex;
        align-items: center;
        padding: 20px;
        transition: color 0.2s ease-in;
    }
    &:hover{
        a {
            color : ${(props) => props.theme.accentColor};
        }
    }
`;

const Title = styled.h1`
    font-size: 48px;
    color : ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
    text-align: center;
    display: block;
    font-size: 48px;
`;

const CoinImg = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`;

interface ICoinInterface {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

function Coins () {

    const { isLoading, data } = useQuery<ICoinInterface[]>({queryKey: ["allCoins"],queryFn: fetchCoins});

    return (
        <Container>
            <Header>
                <Title>Coins</Title>
            </Header>
            {isLoading ?
                (<Loader>"Loading ..."</Loader>) : (
                    <CoinList>
                        {data?.slice(0, 100).map((coin) => {
                            return (
                                <Coin key={coin.id}>
                                    <Link to={{
                                        pathname : `/${coin.id}`,
                                        state : {
                                            name : coin.name
                                        }
                                    }}>
                                        <CoinImg src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}/>
                                        {coin.name} &rarr;
                                    </Link>
                                </Coin>
                            );
                        })}
                    </CoinList>
            )}
        </Container>
    );
}

export default Coins;