<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\DB;


class CategoryController extends Controller
{
    //
    // public function category(Request $request){

    //     $productId=$request->input('productId');
    //     $productName=$request->input('productName');
    //     $productDes=$request->input('productDes');
    //     $productPrice=$request->input('productPrice');
    // }
    // DB::table('categories')->insert([
    //     'productId' => $productId,
    //     'productName'=> $productName,
    //     'productDes' =>$productDes,
    //     'productPrice'=>$productPrice
    // ]);

    // return response()->json([
    //     'status'=>200,
    //     'message'=>"successfully added",
    //     'productName'=> $Category->productName,
    //     'productDes'=> $Category->productDes,
    //     'productPrice'=> $Category->productPrice,
    //     'productId'=> $Category->productId,
    // ]);

}
