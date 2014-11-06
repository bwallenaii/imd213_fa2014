<?php

$products = array(
        array(
            "name" => "Fur Coat",
            "price" => 88.99,
            "stock" => 15
        ),
        array(
            "name" => "Leather Jacket",
            "price" => 77.99,
            "stock" => 87
        ),
        array(
            "name" => "Tweed Hat",
            "price" => 12.78,
            "stock" => 200
        ),
        array(
            "name" => "Suede Boots",
            "price" => 112.13,
            "stock" => 72
        ),
    
    );
    
echo json_encode($products);