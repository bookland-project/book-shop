import AuthorBookItem from "@/components/bookDetails/authorBooks/AuthorBookItem";
import useGetAuthorBooks from "@/react-query/hooks/useGetAuthorBooks";
import useGetBookGroups from "@/react-query/hooks/useGetBookGroups";
import useGetCategoryBooks from "@/react-query/hooks/useGetCategoryBooks";
import { useRouter } from "next/router";
import React from "react";

function Filter() {
  const router = useRouter();
  console.log(router.query.group)
  const{data:groupData,isSuccess}=useGetBookGroups(router.query.group)
  const{data:authorData,isSuccess:authorIsSuccess}=useGetAuthorBooks(router.query.author)
  const{data:categoryData,isSuccess:categoryIsSuccess}=useGetCategoryBooks(router.query.category)
  if (isSuccess){
    return (
      <div>
        {groupData.data.map((book) => 
          <AuthorBookItem
            id={book.id}
            key={book.id}
            bookname={book.bookname}
            authorname={book.authorname}
            price={book.price}
            language={book.language}
            publisher={book.publisher}
            bookcoverimage={book.bookcoverimage}
          />
        )}
      </div>
    );
  }
  if (categoryIsSuccess){
    return (
      <div>
        {categoryData.data.map((book) => 
          <AuthorBookItem
            id={book.id}
            key={book.id}
            bookname={book.bookname}
            authorname={book.authorname}
            price={book.price}
            language={book.language}
            publisher={book.publisher}
            bookcoverimage={book.bookcoverimage}
          />
        )}
      </div>
    );
  }
  if(authorIsSuccess) {
    return (
      <div>
        {authorData.data.map((book) => 
          <AuthorBookItem
            id={book.id}
            key={book.id}
            bookname={book.bookname}
            authorname={book.authorname}
            price={book.price}
            language={book.language}
            publisher={book.publisher}
            bookcoverimage={book.bookcoverimage}
          />
        )}
      </div>
    );
  }
}

export default Filter;
