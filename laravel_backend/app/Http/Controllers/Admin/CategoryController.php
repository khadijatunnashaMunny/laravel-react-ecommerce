<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\DB;


class CategoryController extends Controller
{
    //
    public function category(Request $request){
        $Category= new Category;

        $Category->productId=$request->input('productId');
        $Category->productName=$request->input('productName');
        $Category->productDes=$request->input('productDes');
        $Category->productPrice=$request->input('productPrice');
        $Category->save();
        return response()->json([
            'status'=>200,
            'message'=>"successfully added",
            'productName'=> $Category->productName,
            'productDes'=> $Category->productDes,
            'productPrice'=> $Category->productPrice,
            'productId'=> $Category->productId,
        ]);

    }
}
